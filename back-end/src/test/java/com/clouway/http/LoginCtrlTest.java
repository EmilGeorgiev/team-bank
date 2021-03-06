package com.clouway.http;

import com.clouway.core.*;
import org.jmock.Expectations;
import org.jmock.auto.Mock;
import org.jmock.integration.junit4.JUnitRuleMockery;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;

import java.io.IOException;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.nullValue;
import static org.hamcrest.core.Is.is;

/**
 * Created by clouway on 14-9-24.
 */
public class LoginCtrlTest {

  @Rule
  public JUnitRuleMockery context = new JUnitRuleMockery();

  private User user;
  private LoginCtrl loginCtrl;
  private FakeHttpResponse response;

  @Mock
  UserRepository userRepository;

  @Mock
  SessionRepository sessionRepository;

  @Mock
  IdGenerator idGenerator;

  @Mock
  SiteMap siteMap;

  @Before
  public void setUp() {

    loginCtrl = new LoginCtrl(userRepository, sessionRepository, siteMap);

    DTOUser dtoUser = loginCtrl.getDtoUser();
    dtoUser.setUsername("username");
    dtoUser.setPassword("password");

    user = new User("username", "password");

    response = new FakeHttpResponse() {
      @Override
      public void addCookie(Cookie cookie) {
        super.addCookie(cookie);
      }
    };
  }

  @Test
  public void authenticate() throws ServletException, IOException {

    context.checking(new Expectations() {
      {
        oneOf(userRepository).login(user);
        will(returnValue(true));

        oneOf(siteMap).sessionCookieName();
        will(returnValue("sId"));

        oneOf(sessionRepository).create(user.getName());
        will(returnValue("123"));

      }
    });
    assertThat(loginCtrl.authenticate(response), is("/"));
  }

  @Test
  public void loginFailed() throws ServletException, IOException {

    context.checking(new Expectations() {
      {
        oneOf(userRepository).login(user);
        will(returnValue(false));

        oneOf(siteMap).loginFailed();
        will(returnValue("Error"));
      }
    });
    assertThat(loginCtrl.authenticate(response), nullValue());
  }
}