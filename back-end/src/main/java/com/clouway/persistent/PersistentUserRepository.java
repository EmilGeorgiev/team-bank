package com.clouway.persistent;

import com.clouway.core.User;
import com.clouway.core.UserRepository;
import com.google.common.base.Optional;
import com.google.inject.Inject;
import com.google.inject.Provider;
import com.google.inject.Singleton;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;

/**
 * Created by emil on 14-9-27.
 */
class PersistentUserRepository implements UserRepository {

  private final DB db;

  @Inject
  public PersistentUserRepository(Provider<DB> dbProvider) {

    this.db = dbProvider.get();
  }

  @Override
  public boolean login(User user) {

    BasicDBObject query = new BasicDBObject("username", user.getName())
            .append("password", user.getPassword());

    BasicDBObject result = (BasicDBObject) users().findOne(query);

    if (result == null) {
      return false;
    }

    return true;
  }


  @Override
  public boolean register(User user) {

    if (findByName(user.getName())) {
      return false;
    }

    DBObject query = new BasicDBObject("username", user.getName()).
            append("password", user.getPassword());

    createAccount(user.getName());
    users().insert(query);

    return true;
  }

  private boolean findByName(String username) {

    DBObject query = new BasicDBObject("username", username);

    DBObject projection = new BasicDBObject("_id", 1);

    BasicDBObject result = (BasicDBObject) users().findOne(query, projection);

    return result != null;

  }


  private DBCollection users() {
    return db.getCollection("users");
  }

  private void createAccount(String name) {

    BasicDBObject query = new BasicDBObject();

    query.append("name", name);
    query.append("amount", "0");

    db.getCollection("bank_accounts").insert(query);
  }
}