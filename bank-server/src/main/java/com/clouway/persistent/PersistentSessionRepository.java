package com.clouway.persistent;

import com.clouway.core.CurrentUser;
import com.clouway.core.SessionRepository;
import com.google.inject.Inject;
import com.google.inject.Provider;
import com.mongodb.DB;
import com.mongodb.DBCollection;

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
        return new CurrentUser("Ivan");
    }

    private DBCollection sessions() {
        return db.getCollection("sessions");
    }
}
