# 회원가입 - BE

## Feature

### [API Docs](https://documenter.getpostman.com/view/10834855/SzYUZg9T?version=latest)

#### 중복 체크 기능

- **GET** `api/users/duplicate/userId/{userId}`
  + 해당 요청과 함께 URL로 전달된 ID가 존재하는지 여부를 ```ValidationResponse``` 객체로 응답합니다.
- **GET** `api/users/duplicate/email/{email}` 
  - 해당 요청과 함께 URL로 전달된 이메일이 존재하는지 여부를 ```ValidationResponse``` 객체로 응답합니다.
- **GET** `api/users/duplicate/phone-number/{phoneNumber}`
  + 해당 요청과 함께 URL로 전달된 핸드폰 번호가 존재하는지 여부를 ```ValidationResponse``` 객체로 응답합니다.
- ```ValidationResponse```
  - 중복 체크에 대한 JSON 형태의 응답 객체입니다.
  - key-value 형태는 [API Docs 참고](https://documenter.getpostman.com/view/10834855/SzYUZg9T?version=latest)

#### 로그인, 로그아웃 기능

+ **POST** ```/api/users/login``` 
  + 해당 요청과 함께 JSON 형태로 전달된 데이터가 1) DB에 존재하는지, 2) 비밀번호가 일치하는지 검사한 뒤, 세션에 회원 정보를 저장합니다.
+ **POST** ```/api/users/logout```
  + 해당 요청과 함께 현재 세션에 저장되어 있는 회원 정보를 제거합니다.
+ ```HttpSessionUtils```
  + 로그인, 로그아웃 기능과 관련된 세션 작업을 처리하는 Util 클래스를 정의했습니다.

#### 개인 정보 조회

+ **GET** ```/api/users/{id}```
  + 해당 요청과 함께 URL로 전달된 User 시퀀스번호에 해당되는 회원 정보를 반환합니다.
  + 이후 프로젝트에서는 DTO 클래스를 활용하는 방법도 고려해봐야 할 것 같습니다.

#### 에러 응답

+ ```ErrorResponse``` 
  + 커스텀 예외 처리 클래스 ```UnauthorizedException```, ```ForbiddenException```, ```UserCreateParameterInvalidException```  예외가 발생하는 경우 반환하는 응답 객체입니다.
  + key-value 형태는 [API Docs 참고](https://documenter.getpostman.com/view/10834855/SzYUZg9T?version=latest)
+ 서버에 대한 예외 발생 응답 객체를 통일하지 못했습니다. ```ControllerAdvice``` 로 전역으로 발생하는 예외 상황에 대응하는 것, 응답 객체를 통일하는 것을 고려해봐야 합니다.

### User 관련 기능

#### Validation 기능

`Validation`을 처리할 `Pattern`의 모음인 `ValidationConstant` 클래스를 생성하였습니다.  
추가적인 검증이 필요할 경우를 대비하여, USER_라는 Prefix를 두었습니다.

#### Create 기능

`api/user/create` 로 생성하며, json 형식의 데이터만 불러옵니다. validation 과정을 거치며 실패할 경우 Exception이 발생됩니다.
현재는 Custom Exception을 따로 정의하지 않아서 500 에러가 리턴되나, 추후 수정할 예정입니다.

정상 응답의 경우 생성된 User 객체가 리턴됩니다.
비정상 응답의 경우 Error 정보가 리턴됩니다.

유저 생성시 관심사 정보도 저장할 수 있도록 하였습니다. 그 과정에서 DB 구조가 일부 변경되었습니다.

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
