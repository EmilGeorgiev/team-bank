package com.clouway.persistent;

import com.clouway.core.BankRepository;
import com.clouway.core.CurrentUser;
import com.clouway.core.TransactionMessages;
import com.clouway.core.TransactionStatus;
import com.google.common.base.Optional;
import com.google.inject.Inject;
import com.google.inject.Provider;
import com.google.inject.Singleton;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;

import java.math.BigDecimal;

/**
 * Created by emil on 14-9-25.
 */
class PersistentBankRepository implements BankRepository {
  private final Provider<DB> database;
  private final Provider<Optional<CurrentUser>> optionalUser;
  private final TransactionMessages transactionMessages;

  @Inject
  public PersistentBankRepository(Provider<DB> database,
                                  Provider<Optional<CurrentUser>> optionalUser,
                                  TransactionMessages transactionMessages) {

    this.database = database;
    this.optionalUser = optionalUser;
    this.transactionMessages = transactionMessages;
  }

  /**
   * Deposit amount in client account.
   *
   * @param amount amount who register in account
   * @return info for transaction and new current amount on the client
   */
  @Override
  public TransactionStatus deposit(BigDecimal amount) {

    Optional<CurrentUser> user = optionalUser.get();

    BigDecimal curentAmount = getBalance();

    if (!user.isPresent()) {
      return new TransactionStatus(transactionMessages.noSuchUser(), curentAmount.toString());
    }

    DBObject query = new BasicDBObject("name", user.get().name);

    BigDecimal newAmount = curentAmount.add(amount);

    BasicDBObject update = new BasicDBObject("$set", new BasicDBObject("amount", newAmount.toString()));

    bankAccounts().update(query, update);

    return new TransactionStatus(transactionMessages.onSuccess(), newAmount.toString());
  }

  /**
   * Withdraw amount from client account.If amount who withdraw is greater than current amount
   * transaction is failed.
   *
   * @param amount amount who withdraw from account
   * @return info object for transaction and new current amount on the client.
   */
  @Override
  public TransactionStatus withdraw(BigDecimal amount) {

    Optional<CurrentUser> user = optionalUser.get();

    BigDecimal currentAmount = getBalance();

    if (!user.isPresent()) {
      return new TransactionStatus(transactionMessages.noSuchUser(), currentAmount.toString());
    }

    if (amount.compareTo(currentAmount) > 0) {
      return new TransactionStatus(transactionMessages.amountIsGreater(), currentAmount.toString());
    }

    DBObject query = new BasicDBObject("name", user.get().name);

    BigDecimal newAmount = currentAmount.subtract(amount);

    DBObject update = new BasicDBObject("$set", new BasicDBObject("amount", newAmount.toString()));

    bankAccounts().update(query, update);

    return new TransactionStatus(transactionMessages.onSuccess(), newAmount.toString());
  }

  @Override
  public BigDecimal getBalance() {

    Optional<CurrentUser> user = optionalUser.get();

    if (!user.isPresent()) {
      return new BigDecimal(0);
    }

    DBObject criteria = new BasicDBObject("name", user.get().name);

    DBObject projection = new BasicDBObject("amount", 1)
            .append("_id", 0);

    BasicDBObject dbObject = (BasicDBObject) bankAccounts().findOne(criteria, projection);

    return new BigDecimal(dbObject.getString("amount"));
  }

  private DBCollection bankAccounts() {
    return database.get().getCollection("bank_accounts");
  }
}
