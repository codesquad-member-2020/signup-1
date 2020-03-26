package com.codesquad.team1.signup.response;

public class ValidationResponse {

    private boolean valid;

    private ValidationResponse(boolean valid) {
        this.valid = valid;
    }

    public static ValidationResponse isSuccess() {
        return new ValidationResponse(true);
    }

    public static ValidationResponse isFail() {
        return new ValidationResponse(false);
    }

    public boolean isValid() {
        return valid;
    }
}
