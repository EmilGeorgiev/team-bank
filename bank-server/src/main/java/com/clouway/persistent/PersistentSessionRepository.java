package com.clouway.persistent;

import com.clouway.core.CurrentUser;
import com.clouway.core.SessionRepository;
import com.google.inject.Inject;
import com.google.inject.Provider;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;

/**
 * Created by emil on 14-9-26.
 */
public class PersistentSessionRepository implements SessionRepository {

    private DB db;

    @Inject
    public PersistentSessionRepository(Provider<DB> dbProvider) {

        this.db = dbProvider.get();
    }

    @Override
    public CurrentUser getClientName(String sessionId) {

        DBObject criteria = new BasicDBObject("sid", sessionId);

        DBObject projection = new BasicDBObject("username", 1);

        BasicDBObject userName = (BasicDBObject) sessions().findOne(criteria, projection);

        return new CurrentUser(userName.getString("username"));
    }

    private DBCollection sessions() {
        return db.getCollection("sessions");
    }
}
