package com.clouway.http;

import com.clouway.core.Clock;
import com.clouway.core.Session;
import com.clouway.core.SessionRepository;
import com.clouway.core.SiteMap;
import com.google.inject.Inject;
import com.google.inject.Provider;
import com.google.inject.Singleton;

import javax.servlet.*;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.text.html.parser.Entity;
import java.io.IOException;
import java.sql.Timestamp;
import java.util.Date;
import java.util.EnumSet;
import java.util.Set;

/**
 * @author Emil Georgiev <emogeorgiev88@gmail.com>.
 */
@Singleton
public class SecurityFilter implements Filter {

    private final SiteMap siteMap;
    private final Provider<Set<String>> setProvider;
    private final SessionRepository sessionRepository;

    @Inject
    public SecurityFilter(SiteMap siteMap, Provider<Set<String>> setProvider, SessionRepository sessionRepository) {

        this.siteMap = siteMap;
        this.setProvider = setProvider;
        this.sessionRepository = sessionRepository;
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletResponse response = (HttpServletResponse) servletResponse;

        HttpServletRequest request = (HttpServletRequest) servletRequest;

        String uri = request.getRequestURI();

        for(String resource: setProvider.get()) {
            if(uri.contains(resource)) {
                filterChain.doFilter(request, response);
                return;
            }
        }

        String sessionID = null;

        Cookie[] cookies = request.getCookies();

        if (cookies != null) {
            for(Cookie cookie : cookies) {
                if("sid".equals(cookie.getName())) {
                    sessionID = cookie.getValue();
                }
            }
        }

        if (!sessionRepository.find(sessionID).isPresent()) {
            if (uri.contains("amount")) {

                response.setStatus(401);
                return;
            }
            response.sendRedirect(siteMap.loginPage());
            return;
        }
        filterChain.doFilter(request, response);
    }

    @Override
    public void destroy() {

    }
}