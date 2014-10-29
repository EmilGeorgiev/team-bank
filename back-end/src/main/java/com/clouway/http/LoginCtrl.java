package com.clouway.http;

import com.clouway.core.*;
import com.google.inject.Inject;
import com.google.inject.Singleton;
import com.google.sitebricks.At;
import com.google.sitebricks.Show;
import com.google.sitebricks.http.Get;
import com.google.sitebricks.http.Post;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by clouway on 14-9-25.
 */

@At("/login")
@Show("/login.html")
public class LoginCtrl {

  private UserRepository userRepository;
  private SessionRepository sessionRepository;
  private SiteMap siteMap;
  private String error;
  private DTOUser dtoUser = new DTOUser();

  @Inject
  public LoginCtrl(UserRepository userRepository, SessionRepository sessionRepository, SiteMap siteMap) {

    this.userRepository = userRepository;
    this.sessionRepository = sessionRepository;
    this.siteMap = siteMap;
  }

  @Get
  public void clear() {
    error = null;
  }

  @Post
  public String authenticate(HttpServletResponse response) {

    User user = new User(dtoUser.getUsername(), dtoUser.getPassword());

    if (!userRepository.login(user)) {
      error = siteMap.loginFailed();
      return null;
    }

    String sessionId = sessionRepository.create(user.getName());
    response.addCookie(new Cookie(siteMap.sessionCookieName(), sessionId));
    return "/";
  }

  public DTOUser getDtoUser() {
    return dtoUser;
  }

  public void setDtoUser(DTOUser dtoUser) {
    this.dtoUser = dtoUser;
  }

  public String getError() {
    return error;
  }
}