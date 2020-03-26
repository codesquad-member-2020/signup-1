package com.codesquad.team1.signup.controller;

import com.codesquad.team1.signup.Exception.ForbiddenException;
import com.codesquad.team1.signup.Exception.UnauthorizedException;
import com.codesquad.team1.signup.repository.User;
import com.codesquad.team1.signup.repository.UserRepository;
import com.codesquad.team1.signup.response.ValidationResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.security.InvalidParameterException;
import java.util.Optional;

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
    public ValidationResponse isDuplicatedId(@PathVariable String userId) {
        if (userRepository.countByUserId(userId) > 0) {
            return ValidationResponse.isSuccess();
        }
        return ValidationResponse.isFail();
    }

    @GetMapping("/duplicate/email/{email}")
    public ValidationResponse isDuplicatedEmail(@PathVariable String email) {
        if (userRepository.countByEmail(email) > 0) {
            return ValidationResponse.isSuccess();
        }
        return ValidationResponse.isFail();
    }

    @GetMapping("/duplicate/phone-number/{phoneNumber}")
    public ValidationResponse isDuplicatedPhoneNumber(@PathVariable String phoneNumber) {
        if (userRepository.countByPhoneNumber(phoneNumber) > 0) {
            return ValidationResponse.isSuccess();
        }
        return ValidationResponse.isFail();
    }

    @PostMapping("/create")
    @Transactional
    public User createUser(@RequestBody User user) {
        if (user.validate()) {
            return userRepository.save(user);
        }
        throw new InvalidParameterException("Validation을 통과하지 못한 값 입니다.");
    }

    @PostMapping("/login")
    public ValidationResponse login(@RequestBody User loginUser, HttpSession session) {
        User user = userRepository.findByUserId(loginUser.getUserId()).orElseGet(User::new);
        if (!user.matchPassword(loginUser)) {
            return ValidationResponse.isFail();
        }
        session.setAttribute(SESSION_USER_KEY, user);
        return ValidationResponse.isSuccess();
    }

    @GetMapping("/logout")
    public ValidationResponse logout(HttpSession session) {
        session.removeAttribute(SESSION_USER_KEY);
        session.invalidate();
        return ValidationResponse.isSuccess();
    }

    @GetMapping("/{id}")
    public User showPersonalInformation(@PathVariable String id, HttpSession session) {
        User sessionedUser = Optional.ofNullable((User)session.getAttribute(SESSION_USER_KEY)).orElseThrow(() -> new UnauthorizedException("접근 권한이 없습니다."));
        User requestedUser = userRepository.findById(id).orElseGet(User::new);
        if (!sessionedUser.equals(requestedUser)) {
            throw new ForbiddenException("로그인이 필요합니다.");
        }
        return requestedUser;
    }
}
