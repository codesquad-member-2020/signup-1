export const PATTERN = {
  userId: /^[a-z0-9-_]{5,20}$/,
  password: {
    all: /^(?=.*[A-Za-z])(?=.*d)(?=.*[!@#$%^&*_+~])[A-Za-zd!@#$%^&*_+~]{8,16}$/,
    upperCase: /(.*[A-Z])/,
    number: /(.*[0-9])/,
    sign: /(.*[!@#$%^&*_+~])/,
  },
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phoneNumber: /^(010)(\d{7,8})$/,
  birthday: /^(0-9)$/,
};

export const LIMITED_LENGTH = {
  userId: 20,
  password_min: 8,
  password_max: 16,
  year: 4,
  age_min: 15,
  age_max: 99,
};

export const FORM_ID = {
  userId: "#userId",
  password: "#password",
  checkPassword: "#check-password",
  email: "#email",
  phoneNumber: "#phoneNumber",
  name: "#name",
  year: "#year",
  month: "#month",
  day: "#day",
  gender: "#gender",
  interest: "#interest",
};

export const ERROR_MSG_ID = {
  userId: "#error-msg-id",
  password: "#error-msg-password",
  checkPassword: "#error-msg-check-password",
  email: "#error-msg-email",
  phoneNumber: "#error-msg-phone",
  birthday: "#error-msg-birthday",
  interest: "#error-msg-interest",
};

export const TOGGLE_CLASS = {
  pass: "pass",
  error: "error",
  focus: "forus",
  hidden: "hidden",
  disabled: "disabled",
};

export const ERROR_MESSAGE = {
  userID: {
    misMatch: "5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다.",
    duplicate: "이미 사용중인 아이디입니다.",
  },
  password: {
    range: "8자 이상 16자 이하로 입력해주세요.",
    upperCase: "영문 대문자를 최소 1자 이상 포함해주세요.",
    number: "숫자를 최소 1자 이상 포함해주세요.",
    sign: "특수문자를 최소 1자 이상 포함해주세요.",
  },
  checkPassword: "비밀번호가 일치하지 않습니다.",
  year: "태어난 년도 4자리를 정확하게 입력하세요.",
  day: "태어난 날짜를 다시 확인해주세요.",
  email: "이메일 주소를 다시 확인해주세요.",
  phoneNumber: "형식에 맞지 않는 번호입니다.",
  interest: "3개 이상의 관심사를 입력하세요.",
};

export const PASS_MESSAGE = {
  userID: "사용 가능한 아이디입니다.",
  password: "안전한 비밀번호입니다.",
  checkPassword: "비밀번호가 일치합니다.",
};

export const PASS = "";

export const KEY_CODE_ZERO = 48;

export const KEY_CODE_NINE = 57;

export const KEY_CODE_COMMA = 188;
