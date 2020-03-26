package com.codesquad.team1.signup.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.FORBIDDEN, reason = "접근 권한이 없습니다.")
public class ForbiddenException extends RuntimeException {}
