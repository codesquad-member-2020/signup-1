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
