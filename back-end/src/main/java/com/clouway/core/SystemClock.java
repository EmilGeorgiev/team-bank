package com.clouway.core;

import java.util.Date;

/**
 * Created by clouway on 14-9-26.
 */
public class SystemClock implements Clock {

    @Override
    public Date now() {
        return new Date();
    }
}
