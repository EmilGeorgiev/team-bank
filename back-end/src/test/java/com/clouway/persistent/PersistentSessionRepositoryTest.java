package com.clouway.persistent;

import com.clouway.core.Session;
import com.clouway.core.User;
import com.clouway.persistent.util.CalendarUtil;
import com.google.common.base.Optional;
import com.google.inject.util.Providers;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.MongoClient;
import org.junit.Before;
import org.junit.Test;

import java.net.UnknownHostException;
import java.util.Date;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.nullValue;
import static org.hamcrest.core.IsNull.notNullValue;

public class PersistentSessionRepositoryTest {

    private PersistentSessionRepository persistentSessionRepository;
    private DB db;
    private User user;
    private Session session;
    private CalendarUtil calendarUtil = new CalendarUtil(2014, 10, 27, 10, 30, 20);



    @Before
    public void setUp() throws UnknownHostException {

        MongoClient mongoClient = new MongoClient();

        session = new Session("username", "sessionID", calendarUtil.now());

        user = new User("username", "password");

        db = mongoClient.getDB("team-bank-test");

        persistentSessionRepository = new PersistentSessionRepository(Providers.of(db), calendarUtil);

        sessions().drop();
    }

    @Test
    public void addNewSessionToSessionRepo() {

        persistentSessionRepository.addNewSession(user.getName(), session.getSessionId());

        Session session = persistentSessionRepository.find("sessionID").get();

        assertThat(session.getUsername(), is("username"));
        assertThat(session.getSessionId(), is("sessionID"));
    }

    @Test
    public void removeUserSession() {
        persistentSessionRepository.addNewSession(user.getName(), session.getSessionId());

        persistentSessionRepository.remove(session.getSessionId());

        Optional<Session> session = persistentSessionRepository.find("sessionID");

        assertThat(session.isPresent(), is(false));
    }

    private DBCollection sessions() {
        return db.getCollection("sessions");
    }
}