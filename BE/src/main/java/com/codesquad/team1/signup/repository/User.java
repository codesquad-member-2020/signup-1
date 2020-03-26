package com.codesquad.team1.signup.repository;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDate;
import java.util.regex.Matcher;

import static com.codesquad.team1.signup.constants.ValidationConstants.USER_EMAIL_VALIDATION_PATTERN;
import static com.codesquad.team1.signup.constants.ValidationConstants.USER_ID_VALIDATION_PATTERN;
import static com.codesquad.team1.signup.constants.ValidationConstants.USER_PASSWORD_VALIDATION_PATTERN;
import static com.codesquad.team1.signup.constants.ValidationConstants.USER_PHONE_NUMBER_VALIDATION_PATTERN;

@Table("USERS")
public class User {

    @Id
    private int id;

    private String userId;
    private String password;
    private String name;
    private LocalDate birthday;
    private Gender gender;
    private String email;
    private String phoneNumber;

    public int getId() {
        return id;
    }

    public String getUserId() {
        return userId;
    }

    public String getPassword() {
        return password;
    }

    public String getName() {
        return name;
    }

    public LocalDate getBirthday() {
        return birthday;
    }

    public Gender getGender() {
        return gender;
    }

    public String getEmail() {
        return email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setBirthday(LocalDate birthday) {
        this.birthday = birthday;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public boolean validate() {
        Matcher idMatcher = USER_ID_VALIDATION_PATTERN.matcher(this.userId);
        Matcher passwordMatcher = USER_PASSWORD_VALIDATION_PATTERN.matcher(this.password);
        Matcher emailMatcher = USER_EMAIL_VALIDATION_PATTERN.matcher(this.email);
        Matcher phoneNumberMatcher = USER_PHONE_NUMBER_VALIDATION_PATTERN.matcher(this.phoneNumber);
        return idMatcher.matches() && passwordMatcher.matches() && emailMatcher.matches() && phoneNumberMatcher.matches();
    }

    public boolean matchPassword(User loginUser) {
        return this.password.equals(loginUser.password);
    }
}
