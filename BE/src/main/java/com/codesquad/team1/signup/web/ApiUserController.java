package com.codesquad.team1.signup.web;

import com.codesquad.team1.signup.domain.User;
import com.codesquad.team1.signup.domain.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiUserController {

    private static final Logger log = LoggerFactory.getLogger(ApiUserController.class);

    @Autowired
    private UserRepository userRepository;

    @GetMapping("")
    public User test() {
        return userRepository.findById(1).get();
    }
}
