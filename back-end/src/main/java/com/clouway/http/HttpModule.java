package com.clouway.http;

import com.clouway.core.*;
import com.google.common.base.Optional;
import com.google.inject.Provider;
import com.google.inject.Provides;
import com.google.inject.servlet.RequestScoped;
import com.google.inject.servlet.ServletModule;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by emil on 14-9-24.
 */
public class HttpModule extends ServletModule {

  @Override
  protected void configureServlets() {

    filter("/*").through(SecurityFilter.class);

  }

  @Provides
  public Set<String> unchekedresources() {

    Set<String> unsecureResources = new HashSet<>();

    unsecureResources.add("/login");
    unsecureResources.add("/logout");
    unsecureResources.add("/registration");

    return unsecureResources;

  }

  @Provides
  @RequestScoped
  public Session getCurrentSession(Provider<HttpServletRequest> requestProvider, SessionRepository sessionRepository, SiteMap siteMap) {

    Cookie[] cookies = requestProvider.get().getCookies();

    if (cookies != null) {
      for (Cookie cookie : cookies) {

        Optional<Session> session = sessionRepository.find(cookie.getValue());

        if (cookie.getName().equals(siteMap.sessionCookieName()) && session.isPresent()) {
          return session.get();
        }
      }
    }
    return null;
  }


  @Provides
  @RequestScoped
  public Optional<CurrentUser> getCurrentUserName(Provider<HttpServletRequest> request, SessionRepository sessionRepository) {

    HttpServletRequest servletRequest = request.get();

    if (servletRequest != null) {
      Cookie[] cookies = request.get().getCookies();

      if (cookies != null) {
        for (Cookie cookie : cookies) {
          if ("sid".equals(cookie.getName())) {
            return sessionRepository.findUser(cookie.getValue());
          }
        }
      }
    }
    return Optional.absent();
  }
}