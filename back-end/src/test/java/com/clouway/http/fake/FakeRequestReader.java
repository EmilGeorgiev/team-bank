package com.clouway.http.fake;

import com.clouway.http.DTOAmount;

import static com.google.sitebricks.headless.Request.*;

/**
 * Created by emil on 14-9-25.
 */
public class FakeRequestReader implements RequestRead {
  public DTOAmount amount;

  public FakeRequestReader(DTOAmount amount) {
    this.amount = amount;
  }

  @Override
  public Object as(Class aClass) {
    return amount;
  }
}