package com.clouway.persistent;

import com.clouway.core.IdGenerator;
import com.clouway.core.Session;
import com.clouway.core.User;
import com.clouway.persistent.util.CalendarUtil;
import com.google.common.base.Optional;
import com.google.inject.util.Providers;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.MongoClient;
import org.jmock.Expectations;
import org.jmock.auto.Mock;
import org.jmock.integration.junit4.JUnitRuleMockery;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;

import java.net.UnknownHostException;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.nullValue;
import static org.hamcrest.core.IsNull.notNullValue;

public class PersistentSessionRepositoryTest {

  private PersistentSessionRepository persistentSessionRepository;
  private DB database;
  private User user;
  private Session session;
  private CalendarUtil calendarUtil = new CalendarUtil(2014, 10, 27, 10, 30, 20);

  @Rule
  public JUnitRuleMockery context = new JUnitRuleMockery();

  @Mock
  private IdGenerator idGenerator;

  @Before
  public void setUp() throws UnknownHostException {

    MongoClient mongoClient = new MongoClient();

    session = new Session("username", "sessionID", calendarUtil.nowPlus(60000l));

    user = new User("username", "password");

    database = mongoClient.getDB("team-bank-test");

    persistentSessionRepository = new PersistentSessionRepository(Providers.of(database), calendarUtil, 60000l, idGenerator);

    sessions().drop();
  }

  @Test
  public void addNewSessionToSessionRepo() {

    context.checking(new Expectations() {
      {

        oneOf(idGenerator).generateId();
        will(returnValue("sessionID"));
      }
    });

    persistentSessionRepository.create(user.getName());

    Session session = persistentSessionRepository.find("sessionID").get();

    assertThat(session.getUsername(), is("username"));
    assertThat(session.getSessionId(), is("sessionID"));
  }

  @Test
  public void removeUserSession() {

    context.checking(new Expectations() {
      {

        oneOf(idGenerator).generateId();
        will(returnValue("sessionID"));
      }
    });

    persistentSessionRepository.create(user.getName());

    persistentSessionRepository.remove(session.getSessionId());

    Optional<Session> session = persistentSessionRepository.find("sessionID");

    assertThat(session.isPresent(), is(false));
  }

  private DBCollection sessions() {
    return database.getCollection("sessions");
  }
}