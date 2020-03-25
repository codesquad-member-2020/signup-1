package com.codesquad.team1.signup.constants;

import java.util.regex.Pattern;

public class ValidationConstants {

    public static final Pattern USER_ID_VALIDATION_PATTERN = Pattern.compile("^[a-z0-9-_]{5,20}$");
    public static final Pattern USER_PASSWORD_VALIDATION_PATTERN =
            Pattern.compile("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[!@#$%^&*_+~])[A-Za-z\\d!@#$%^&*_+~]{8,16}$");

    public static final Pattern USER_EMAIL_VALIDATION_PATTERN =
            Pattern.compile("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");

    public static final Pattern USER_PHONE_NUMBER_VALIDATION_PATTERN = Pattern.compile("^(010)(\\d{7,8})$");

    private ValidationConstants() {}
}