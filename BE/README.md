# 회원가입 - BE

## DATABASE 생성

TABLE NAME | DB COLUMN NAME | TYPE
-- | -- | --
USERS | ID(PK) | INT
🤓 | USER_ID | VARCHAR
🤓 | PASSWORD | VARCHAR
🤓 | NAME | VARCHAR
🤓 | BIRTH_DAY | DATE
🤓 | SEX | ENUM
🤓 | EMAIL(Unique) | VARCHAR
🤓 | PHONE_NUMBER(Unique) | VARCHAR

INTERESTS | DB COLUMN NAME | TYPE
-- | -- | --
🤓 | ID(PK) | INT
🤓 | INTEREST | VARCHAR
🤓 | UID(FK) | INT

DB 설계는 전체 토의 후 결정하였습니다.

## Feature
+ feature/be/user
    + 회원과 관련된 User, UserRepository 클래스 생성
    + USERS 테이블의 Enum 타입에 맵핑하기 위한 Gender enum 생성
    + 간단한 DB 연결 테스트
+ feature/be/duplicatedId
    + 중복 ID 조회 API 기능 구현
