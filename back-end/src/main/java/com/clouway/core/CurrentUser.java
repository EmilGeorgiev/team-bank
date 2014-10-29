package com.clouway.core;

import com.google.inject.Inject;

/**
 * Created by emil on 14-9-26.
 */
public class CurrentUser {

  public final String name;

  //    @Inject
  public CurrentUser(String name) {
    this.name = name;
  }

}
