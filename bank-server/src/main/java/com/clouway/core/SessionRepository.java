package com.clouway.core;

/**
 * Created by emil on 14-9-26.
 */
public interface SessionRepository {

    CurrentUser getClientName(String sessionId);
}
