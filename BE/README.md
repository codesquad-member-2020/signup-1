# 회원가입 - BE

## Feature
+ feature/be/user
    + 회원과 관련된 User, UserRepository 클래스 생성
    + USERS 테이블의 Enum 타입에 맵핑하기 위한 Gender enum 생성
    + 간단한 DB 연결 테스트
+ feature/be/duplicatedId
    + 중복 ID 조회 API 기능 구현
### User 관련 기능

#### Validation 기능

`Validation`을 처리할 `Pattern`의 모음인 `ValidationConstant` 클래스를 생성하였습니다.  
추가적인 검증이 필요할 경우를 대비하여, USER_라는 Prefix를 두었습니다.

#### Create 기능

`api/user/create` 로 생성하며, json 형식의 데이터만 불러옵니다. validation 과정을 거치며 실패할 경우 Exception이 발생됩니다.
현재는 Custom Exception을 따로 정의하지 않아서 500 에러가 리턴되나, 추후 수정할 예정입니다.

정상 응답의 경우 생성된 User 객체가 리턴됩니다.
비정상 응답의 경우 Error 정보가 리턴됩니다.

### FE BE 연동

build된 파일을 직접 넣어줬는데, 그렇게 하지 않아도 되도록 할 예정입니다.
template에 넣으면 css가 깨져서 일단 static에 넣어주었습니다.

## Deployment

- GitHub Actions를 이용한 heroku 자동 배포 시스템 구축
- master와 develop 환경이 분리되서 배포되도록 수정

## Database

- 회원가입 시스템을 구현하기 위한 데이터 베이스 설계

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

Database Connection이 잘 맺어지는지 테스트 하기 위한 테스트 코드를 포함하였습니다.

DB 접속 프로퍼티 정보를 Jasypt 라이브러리를 이용해서 암호화 처리하였습니다.

## Logging

로깅을 logback을 이용해서 Default 값이 없는 항목만 지정해주었습니다.  
로그를 파일로 저장하도록 하였습니다.
