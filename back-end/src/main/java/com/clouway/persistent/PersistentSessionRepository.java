package com.clouway.persistent;

import com.clouway.core.*;
import com.google.common.base.Optional;
import com.google.inject.Inject;
import com.google.inject.Provider;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;

/**
 * Created by emil on 14-9-26.
 */
class PersistentSessionRepository implements SessionRepository {

  private DB db;
  private Clock clock;
  private final Long miliseconds;
  private final IdGenerator idGenerator;

  public PersistentSessionRepository(Provider<DB> dbProvider, Clock clock, Long miliseconds, IdGenerator idGenerator) {

    this.clock = clock;
    this.miliseconds = miliseconds;
    this.idGenerator = idGenerator;
    this.db = dbProvider.get();
  }

  @Override
  public Optional<CurrentUser> findUser(String sessionId) {

    DBObject criteria = new BasicDBObject("sessionId", sessionId);

    DBObject projection = new BasicDBObject("username", 1);

    BasicDBObject username = (BasicDBObject) sessions().findOne(criteria, projection);

    if (username != null) {
      return Optional.of(new CurrentUser(username.getString("username")));
    }

    return Optional.absent();
  }

  @Override
  public String create(String username) {

    String sessionId = idGenerator.generateId();

    DBObject query = new BasicDBObject("username", username)

            .append("sessionId", sessionId)
            .append("expirationTime", clock.nowPlus(miliseconds));

    sessions().createIndex(new BasicDBObject("expirationTime", 1));

    sessions().insert(query);

    return sessionId;
  }


  @Override
  public void remove(String sessionId) {

    BasicDBObject query = new BasicDBObject();

    query.append("sessionId", sessionId);

    sessions().remove(query);
  }

  @Override
  public Optional<Session> find(String sessionId) {

    BasicDBObject query = new BasicDBObject("sessionId", sessionId);

    BasicDBObject fields = new BasicDBObject("username", 1)
            .append("sessionId", 1)
            .append("expirationTime", 1);

    BasicDBObject dbObject = (BasicDBObject) sessions().findOne(query, fields);

    if (dbObject != null) {
      return Optional.of(new Session(dbObject.getString("username"),
              dbObject.getString("sessionId"),
              dbObject.getDate("expirationTime")));
    }

    return Optional.absent();
  }

  @Override
  public void renewExpirationDate(String sessionID) {

    DBObject query = new BasicDBObject("sessionId", sessionID);

    DBObject update = new BasicDBObject("$set", new BasicDBObject("expirationTime", clock.nowPlus(miliseconds)));

    sessions().update(query, update);
  }

  @Override
  public boolean isSessionExpired(String sessionID) {

    DBObject query = new BasicDBObject("sessionId", sessionID);

    DBObject projection = new BasicDBObject("expirationTime", 1);

    BasicDBObject dbObject = (BasicDBObject) sessions().findOne(query, projection);

    if (dbObject == null) {
      return true;
    }

    if (dbObject.getDate("expirationTime").compareTo(clock.now()) > 0) {
      return false;
    }

    return true;
  }

  private DBCollection sessions() {
    return db.getCollection("sessions");
  }
}