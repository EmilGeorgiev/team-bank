package com.clouway.core;

/**
 * Created by clouway on 14-10-3.
 */

class RegexAmountValidator implements Validator<Amount> {

  @Override
  public boolean isValid(Amount amount) {

    if (amount == null) {
      return false;
    }

    return amount.getAmount() != null && amount.getAmount().matches("^[1-9][0-9]*(\\.[0-9]{1,2})?$");
  }
}