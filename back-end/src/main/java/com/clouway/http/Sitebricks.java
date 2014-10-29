package com.clouway.http;

import com.google.inject.Singleton;
import com.google.sitebricks.SitebricksModule;

/**
 * Created by emil on 14-9-24.
 */
public class Sitebricks extends SitebricksModule {

  @Override
  protected void configureSitebricks() {

    at("/registration").show(RegistrationCtrl.class).in(Singleton.class);
    at("/login").show(LoginCtrl.class).in(Singleton.class);
    at("/logout").serve(LogoutService.class).in(Singleton.class);
    at("/amount").serve(BankService.class).in(Singleton.class);
  }
}