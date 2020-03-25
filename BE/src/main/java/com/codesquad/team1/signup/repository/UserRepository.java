package com.codesquad.team1.signup.repository;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

    @Query("select count(*) from USERS where user_id = :userId")
    long findByUserId(String userId);

    @Query("select count(*) from USERS where email = :email")
    long findByEmail(String email);
}
