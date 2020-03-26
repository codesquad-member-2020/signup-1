package com.codesquad.team1.signup.response;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Result {
    @JsonProperty
    private boolean valid;

    private Result(boolean valid) {
        this.valid = valid;
    }

    public static Result isSuccess() {
        return new Result(true);
    }

    public static Result isFail() {
        return new Result(false);
    }
}
