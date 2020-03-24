package com.codesquad.team1.signup.domain;

import org.springframework.data.annotation.Id;

import java.time.LocalDate;

public class User {
    @Id
    private int id;
    private String userId;
    private String password;
    private String name;
    private LocalDate birthday;
    private String gender;
    private String email;
    private String phoneNumber;
}
