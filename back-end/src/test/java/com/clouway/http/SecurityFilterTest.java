package com.clouway.http;

import com.clouway.core.Session;
import com.clouway.core.SiteMap;
import com.clouway.core.SessionRepository;
import com.clouway.http.util.DateTimeUtil;
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
import java.util.Calendar;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

public class SecurityFilterTest {

    private SecurityFilter securityFilter;
    private Session session;
    private Set<String> unsecureResources = new HashSet<>();

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

    @Before
    public void setUp() {

        unsecureResources.add("/login");
        unsecureResources.add("/registration");
        unsecureResources.add("/logout");



        securityFilter = new SecurityFilter(Providers.of(session), siteMap, Providers.of(unsecureResources));
    }

    @Test
    public void sessionIsNotExpired() throws IOException, ServletException {

        context.checking(new Expectations() {
            {

//                oneOf(request).getRequestURI();
//                will(returnValue("/"));
//
//                oneOf(siteMap).loginPage();
//                will(returnValue("/login"));
//
//                oneOf(response).sendRedirect("/login");
//
//                oneOf(filterChain).doFilter(request, response);
            }
        });

//        securityFilter.doFilter(request, response, filterChain);

    }


    @Test
    public void sessionIsExpired() throws IOException, ServletException {

        context.checking(new Expectations() {
            {

                oneOf(request).getRequestURI();
                will(returnValue("/"));

                oneOf(siteMap).loginPage();
                will(returnValue("/login"));

                oneOf(response).sendRedirect("/login");
            }
        });

        securityFilter.doFilter(request, response, filterChain);

    }
}