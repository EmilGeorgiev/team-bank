package com.clouway.core;

import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class RegexAmountValidatorTest {

  private RegexAmountValidator amountValidator = new RegexAmountValidator();


  @Test
  public void tryValidAmountWithLatters() throws Exception {

    Amount amount = new Amount("12avc");

    boolean result = amountValidator.isValid(amount);

    assertThat(result, is(false));
  }

  @Test
  public void validateAmountWithMoreThanTwoCharactersAfterTheComma() throws Exception {

    Amount amount = new Amount("12.345");

    boolean result = amountValidator.isValid(amount);

    assertThat(result, is(false));
  }

  @Test
  public void validateAmountAtLeastOne() throws Exception {

    Amount amount = new Amount("0.2");

    boolean result = amountValidator.isValid(amount);

    assertThat(result, is(false));

  }

  @Test
  public void validateNullObjectAmount() throws Exception {

    boolean result = amountValidator.isValid(null);

    assertThat(result, is(false));
  }

  @Test
  public void validateNullAmount() throws Exception {
    Amount amount = new Amount(null);

    boolean result = amountValidator.isValid(amount);

    assertThat(result, is(false));

  }

  @Test
  public void validateCorectAmount() throws Exception {
    Amount amount = new Amount("12.34");

    boolean result = amountValidator.isValid(amount);

    assertThat(result, is(true));

  }
}