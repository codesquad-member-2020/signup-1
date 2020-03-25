package com.codesquad.team1.signup.controller;

import com.codesquad.team1.signup.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
