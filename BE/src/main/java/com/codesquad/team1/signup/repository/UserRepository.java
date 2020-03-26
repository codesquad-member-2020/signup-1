package com.codesquad.team1.signup.repository;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Integer> {

    @Query("select count(*) from USERS where binary user_id = :userId")
    long countByUserId(String userId);

    @Query("select count(*) from USERS where binary email = :email")
    long countByEmail(String email);

    @Query("select count(*) from USERS where binary phone_number = :phoneNumber")
    long countByPhoneNumber(String phoneNumber);

    @Query("select * from USERS where binary user_id = :userId")
    Optional<User> findByUserId(String userId);

    @Query("select * from USERS where id = :id")
    Optional<User> findById(String id);
}
