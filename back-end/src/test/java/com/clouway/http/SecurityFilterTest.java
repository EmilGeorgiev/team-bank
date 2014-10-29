package com.clouway.http;

import com.clouway.core.Session;
import com.clouway.core.SessionRepository;
import com.clouway.core.SiteMap;
import com.clouway.custommatcher.CapturingMatcher;
import com.google.inject.util.Providers;
import org.jmock.Expectations;
import org.jmock.auto.Mock;
import org.jmock.integration.junit4.JUnitRuleMockery;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class SecurityFilterTest {

  private SecurityFilter securityFilter;
  private Session session;
  private Set<String> unsecureResources = new HashSet<>();
  private Cookie[] cookies;


  @Rule
  public JUnitRuleMockery context = new JUnitRuleMockery();

  @Mock
  private HttpServletRequest request;

  @Mock
  private FilterChain filterChain;

  @Mock
  private HttpServletResponse response;

  @Mock
  private SiteMap siteMap;

  @Mock
  private SessionRepository sessionRepository;

  @Before
  public void setUp() {

    unsecureResources.add("/login");
    unsecureResources.add("/registration");
    unsecureResources.add("/logout");

    cookies = new Cookie[]{new Cookie("sid", "123")};

    securityFilter = new SecurityFilter(siteMap, Providers.of(unsecureResources), sessionRepository);

  }

  @Test
  public void sessionIsNotExpired() throws IOException, ServletException {

    final CapturingMatcher<Cookie[]> capturingMatcher =
            new CapturingMatcher<>(Expectations.any(Cookie[].class));

    context.checking(new Expectations() {
      {

        oneOf(request).getRequestURI();
        will(returnValue("/"));

        oneOf(request).getCookies();
        will(returnValue(cookies));

        oneOf(sessionRepository).isSessionExpired(sessionID("123"));
        will(returnValue(false));

        oneOf(sessionRepository).renewExpirationDate("123");

        oneOf(filterChain).doFilter(request, response);
      }
    });

    securityFilter.doFilter(request, response, filterChain);

    boolean matcher = capturingMatcher.matches(cookies);

    assertThat(matcher, is(true));

  }

  @Test
  public void sessionIsExpired() throws IOException, ServletException {

    final CapturingMatcher<Cookie[]> capturingMatcher =
            new CapturingMatcher<>(Expectations.any(Cookie[].class));

    context.checking(new Expectations() {
      {

        oneOf(request).getRequestURI();
        will(returnValue("/"));

        oneOf(request).getCookies();
        will(returnValue(cookies));

        oneOf(sessionRepository).isSessionExpired(sessionID("123"));
        will(returnValue(true));

        oneOf(siteMap).loginPage();
        will(returnValue("/login"));

        oneOf(response).sendRedirect("/login");
      }
    });

    securityFilter.doFilter(request, response, filterChain);

    boolean matcher = capturingMatcher.matches(cookies);

    assertThat(matcher, is(true));

  }

  @Test
  public void sessionIsExpiredAndRequestURIContainsAmount() throws Exception {

    final CapturingMatcher<Cookie[]> capturingMatcher =
            new CapturingMatcher<>(Expectations.any(Cookie[].class));

    context.checking(new Expectations() {
      {
        oneOf(request).getRequestURI();
        will(returnValue("/amount"));

        oneOf(request).getCookies();
        will(returnValue(cookies));

        oneOf(sessionRepository).isSessionExpired(sessionID("123"));
        will(returnValue(true));

        oneOf(response).setStatus(401);
      }
    });

    securityFilter.doFilter(request, response, filterChain);

    boolean matcher = capturingMatcher.matches(cookies);

    assertThat(matcher, is(true));
  }

  private String sessionID(String sessionID) {
    return sessionID;
  }
}