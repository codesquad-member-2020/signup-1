package com.codesquad.team1.signup.api;

import com.codesquad.team1.signup.common.constants.ErrorMessages;
import com.codesquad.team1.signup.common.response.ErrorResponse;
import com.codesquad.team1.signup.common.exception.ForbiddenException;
import com.codesquad.team1.signup.common.exception.UnauthorizedException;
import com.codesquad.team1.signup.common.utils.HttpSessionUtils;
import com.codesquad.team1.signup.domain.user.User;
import com.codesquad.team1.signup.domain.user.UserRepository;
import com.codesquad.team1.signup.common.response.ValidationResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.security.InvalidParameterException;

@RestController
@RequestMapping("/api/users")
public class ApiUserController {

    private static final Logger log = LoggerFactory.getLogger(ApiUserController.class);

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
        throw new InvalidParameterException(ErrorMessages.INVALID_PARAMETER);
    }

    @PostMapping("/login")
    public ValidationResponse login(@RequestBody User loginUser, HttpSession session) {
        User user = userRepository.findByUserId(loginUser.getUserId()).orElseGet(User::new);
        if (!user.matchPassword(loginUser)) {
            return ValidationResponse.isFail();
        }
        session.setAttribute(HttpSessionUtils.SESSION_LOGINED_USER, user);
        return ValidationResponse.isSuccess();
    }

    @PostMapping("/logout")
    public ValidationResponse logout(HttpSession session) {
        HttpSessionUtils.logout(session);
        return ValidationResponse.isSuccess();
    }

    @GetMapping("/{id}")
    public User showPersonalInformation(@PathVariable String id, HttpSession session) {
        User sessionUser = HttpSessionUtils.getLoginedUserFromSession(session).orElseThrow(() -> new UnauthorizedException(ErrorMessages.UNAUTHORIZED));
        User requestedUser = userRepository.findById(id).orElseGet(User::new);
        if (!sessionUser.equals(requestedUser)) {
            throw new ForbiddenException(ErrorMessages.FORBIDDEN);
        }
        return requestedUser;
    }

    @ExceptionHandler(UnauthorizedException.class)
    public ErrorResponse handleUnauthorizedException(UnauthorizedException e) {
        return new ErrorResponse(e.getMessage(), HttpStatus.UNAUTHORIZED.value());
    }

    @ExceptionHandler(ForbiddenException.class)
    public ErrorResponse handleForbiddenException(ForbiddenException e) {
        return new ErrorResponse(e.getMessage(), HttpStatus.FORBIDDEN.value());
    }

    @ExceptionHandler(InvalidParameterException.class)
    public ErrorResponse handleInvalidParameterException(InvalidParameterException e) {
        return new ErrorResponse(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY.value());
    }
}
