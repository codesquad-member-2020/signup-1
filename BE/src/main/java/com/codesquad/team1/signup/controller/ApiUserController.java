package com.codesquad.team1.signup.controller;

import com.codesquad.team1.signup.repository.User;
import com.codesquad.team1.signup.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.security.InvalidParameterException;

@RestController
@RequestMapping("/users")
public class ApiUserController {

    private static final Logger log = LoggerFactory.getLogger(ApiUserController.class);

    private UserRepository userRepository;

    public ApiUserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/duplicate/id/{userId}")
    public boolean isDuplicatedId(@PathVariable String userId) {
        long queryResult = userRepository.findByUserId(userId);
        return queryResult > 0;
    }

    @GetMapping("/duplicate/email/{email}")
    public boolean isDuplicatedEmail(@PathVariable String email) {
        long queryResult = userRepository.findByEmail(email);
        return queryResult > 0;
    }

    @GetMapping("/duplicate/phone-number/{phoneNumber}")
    public boolean isDuplicatedPhoneNumber(@PathVariable String phoneNumber) {
        long queryResult = userRepository.findByPhoneNumber(phoneNumber);
        return queryResult > 0;
    }

    @PostMapping("/create")
    public User createUser(@RequestBody User user) {
        if (user.validate()) {
            return userRepository.save(user);
        }
        throw new InvalidParameterException("Validation을 통과하지 못한 값 입니다.");
    }

}
