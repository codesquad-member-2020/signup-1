package com.codesquad.team1.signup.dbconnection;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import static org.assertj.core.api.Assertions.fail;

@SpringBootTest
public class DBConnectionTest {

    @Value("${spring.datasource.driver-class-name}")
    private String driver;

    @Value("${spring.datasource.url}")
    private String url;

    @Value("${spring.datasource.username}")
    private String username;

    @Value("${spring.datasource.password}")
    private String password;

    @Test
    void DB_연결_테스트() throws ClassNotFoundException {
        Class.forName(driver);
        try (Connection con = DriverManager.getConnection(url, username, password)) {
        } catch (SQLException e) {
            e.printStackTrace();
            fail("DB Connection 실패 설정 정보를 확인해주세요.");
        }
    }
}
