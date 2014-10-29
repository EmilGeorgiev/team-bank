package com.clouway.core;

import com.google.common.hash.HashCode;
import com.google.common.hash.HashFunction;
import com.google.common.hash.Hashing;

import java.util.UUID;

/**
 * Created by clouway on 14-9-26.
 */
public class SessionIdGenerator implements IdGenerator {
  @Override
  public String generateId() {
    UUID uuid = UUID.randomUUID();
    HashFunction hashFunction = Hashing.sha1();
    HashCode hashCode = hashFunction.hashString(uuid.toString());
    return hashCode.toString();
  }
}