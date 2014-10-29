package com.clouway.core;

import com.google.common.base.Optional;

/**
 * Created by emil on 14-9-27.
 */
public interface SessionRepository {

  Optional<CurrentUser> findUser(String sessionId);

  String create(String username);

  void remove(String sessionId);

  Optional<Session> find(String sessionId);

  void renewExpirationDate(String sessionID);

  boolean isSessionExpired(String sessionID);
}