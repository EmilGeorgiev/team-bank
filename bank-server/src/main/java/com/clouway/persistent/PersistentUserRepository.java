package com.clouway.persistent;

import com.clouway.core.CurrentAmount;
import com.clouway.core.UserRepository;
import com.google.inject.Inject;
import com.google.inject.Provider;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;

/**
 * Created by emil on 14-9-27.
 */
public class PersistentUserRepository implements UserRepository{


    private final DB db;

    @Inject
    public PersistentUserRepository(Provider<DB> dbProvider) {

        this.db = dbProvider.get();
    }

    @Override
    public CurrentAmount getAmountBy(String name) {

        DBObject query = new BasicDBObject("name", name);

        DBObject projection = new BasicDBObject("amount", 1)
                .append("_id", 0);

        BasicDBObject amount = (BasicDBObject) users().findOne(query, projection);

        return new CurrentAmount(amount.getDouble("amount"));
    }

    private DBCollection users() {

        return db.getCollection("users");
    }
}
