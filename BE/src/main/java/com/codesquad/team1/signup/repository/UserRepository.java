package com.codesquad.team1.signup.repository;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Integer> {
    @Query("select user_id from USERS where user_id = :userId")
    Optional<String> findByUserId(String userId);
}
