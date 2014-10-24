package com.clouway.http.util;

import com.clouway.core.Clock;

import java.util.Calendar;
import java.util.Date;

/**
 * @author Emil Georgiev <emogeorgiev88@gmail.com>.
 */
public class DateTimeUtil implements Clock{
    private final int years;
    private final int month;
    private final int day;
    private final int hours;
    private final int minutes;
    private final int seconds;

    public DateTimeUtil(int years, int month, int day, int hours, int minutes, int seconds) {

        this.years = years;
        this.month = month;
        this.day = day;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    @Override
    public Date sessionExpirationTime(Calendar calendar) {
        return calendar.getTime();
    }

    @Override
    public Date now() {
        Calendar calendar = Calendar.getInstance();

        calendar.set(years, month, day, hours, minutes, seconds);

        return calendar.getTime();
    }
}
