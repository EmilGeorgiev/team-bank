package com.clouway.core;

import com.google.inject.AbstractModule;
import com.google.inject.Provides;
import com.google.inject.name.Names;

/**
 * @author Emil Georgiev <emogeorgiev88@gmail.com>.
 */
public class CoreModule extends AbstractModule {
  @Override
  protected void configure() {

    bind(IdGenerator.class).to(SessionIdGenerator.class);
    bind(SiteMap.class).to(LabelMap.class);
    bind(Clock.class).to(SystemClock.class);
    bind(Validator.class).annotatedWith(Names.named("UserValidator")).to(RegexUserValidator.class);
    bind(Validator.class).annotatedWith(Names.named("AmountValidator")).to(RegexAmountValidator.class);
  }

  @Provides
  public TransactionMessages getTransactionMessages() {
    return new TransactionMessages() {
      @Override
      public String onSuccess() {
        return "Successful transaction!";
      }

      @Override
      public String amountIsGreater() {
        return "Amount is more then Balance";
      }

      @Override
      public String noSuchUser() {
        return "No such user";
      }
    };
  }


}
