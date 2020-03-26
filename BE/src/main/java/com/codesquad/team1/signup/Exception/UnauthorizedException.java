package com.codesquad.team1.signup.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.UNAUTHORIZED, reason = "로그인이 필요합니다.")
public class UnauthorizedException extends RuntimeException{}
