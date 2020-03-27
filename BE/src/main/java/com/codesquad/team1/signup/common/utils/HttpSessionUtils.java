package com.codesquad.team1.signup.common.utils;

import com.codesquad.team1.signup.domain.user.User;

import javax.servlet.http.HttpSession;
import java.util.Optional;

public class HttpSessionUtils {

    public static final String SESSION_LOGINED_USER = "loginedUser";

    private HttpSessionUtils() {}

    public static Optional<User> getLoginedUserFromSession(HttpSession session) {
       return Optional.ofNullable((User)session.getAttribute(SESSION_LOGINED_USER));
    }

    public static void logout(HttpSession session) {
        session.removeAttribute(SESSION_LOGINED_USER);
        session.invalidate();
    }
}
