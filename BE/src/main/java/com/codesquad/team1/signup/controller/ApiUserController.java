package com.codesquad.team1.signup.controller;

import com.codesquad.team1.signup.repository.User;
import com.codesquad.team1.signup.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.security.InvalidParameterException;

@RestController
@RequestMapping("/api/users")
public class ApiUserController {

    private static final Logger log = LoggerFactory.getLogger(ApiUserController.class);
    private static final String SESSION_USER_KEY = "sessionedUser";

    private UserRepository userRepository;

    public ApiUserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/duplicate/userId/{userId}")
    public boolean isDuplicatedId(@PathVariable String userId) {
        return userRepository.countByUserId(userId) > 0;
    }

    @GetMapping("/duplicate/email/{email}")
    public boolean isDuplicatedEmail(@PathVariable String email) {
        return userRepository.countByEmail(email) > 0;
    }

    @GetMapping("/duplicate/phone-number/{phoneNumber}")
    public boolean isDuplicatedPhoneNumber(@PathVariable String phoneNumber) {
        return userRepository.countByPhoneNumber(phoneNumber) > 0;
    }

    @PostMapping("/create")
    public User createUser(@RequestBody User user) {
        if (user.validate()) {
            return userRepository.save(user);
        }
        throw new InvalidParameterException("Validation을 통과하지 못한 값 입니다.");
    }

    @PostMapping("/login")
    public boolean login(@RequestBody User loginUser, HttpSession session) {
        User user = userRepository.findByUserId(loginUser.getUserId()).orElseGet(User::new);
        if (!user.matchPassword(loginUser))
            return false;

        session.setAttribute(SESSION_USER_KEY, user);
        return true;
    }

    @GetMapping("/logout")
    public boolean logout(HttpSession session) {
        session.removeAttribute(SESSION_USER_KEY);
        session.invalidate();
        return true;
    }
}
