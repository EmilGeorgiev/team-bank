package com.clouway.core;

/**
 * Created by emil on 14-9-27.
 */
public interface UserRepository {

  boolean login(User user);

  boolean register(User user);
}