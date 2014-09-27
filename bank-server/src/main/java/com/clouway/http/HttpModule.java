package com.clouway.http;

import com.clouway.core.BankRepository;
import com.clouway.persistent.PersistentBankRepository;
import com.google.inject.servlet.ServletModule;

/**
 * Created by emil on 14-9-24.
 */
public class HttpModule extends ServletModule {

    @Override
    protected void configureServlets() {
        super.configureServlets();

        bind(BankRepository.class).to(PersistentBankRepository.class);
    }





}
