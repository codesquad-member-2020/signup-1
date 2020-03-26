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

export const NUM_KEY_CODE_ZERO = 48;

export const NUM_KEY_CODE_NINE = 57;
