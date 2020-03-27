package com.codesquad.team1.signup.domain.interest;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("INTERESTS")
public class Interest {

    @Id
    private int id;

    private String interest;

    public int getId() {
        return id;
    }

    public String getInterest() {
        return interest;
    }
}
