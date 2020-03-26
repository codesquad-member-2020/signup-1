import { PATTERN, FORM_ID, LIMITED_LENGTH, ERROR_MSG_ID, CHECK_DELAY_TIME } from "./constants.js";
import app from "./server.js";
import { _q, daysInMonth } from "./util.js";

export const inputData = new Map([
  ["userId", null],
  ["password", null],
  ["checkPassword", null],
  ["name", null],
  ["year", null],
  ["month", null],
  ["day", null],
  ["birthDay", null],
  ["gender", null],
  ["email", null],
  ["phoneNumber", null],
  ["interest", null],
  ["terms", null],
]);

export const inputFields = {
  userId: {
    inputElement: _q(FORM_ID.userId),
    timeout: null,
    selectErrorMessage() {
      if (!this.isFieldValid()) return this.errorMessage.misMatch;
      if (this.isDuplicate()) return this.errorMessage.duplicate;
      return null;
    },
    isFieldValid() {
      const userId = this.inputElement.value;
      const userIdRegex = PATTERN.userId;
      return userId !== "" && userIdRegex.test(userId);
    },
    isDuplicate() {
      // clearTimeout(this.timeout);
      // this.timeout = setTimeout(() => {
      return app.checkDuplicate(this.inputElement.value);
      // }, CHECK_DELAY_TIME);
    },
    errorMessage: {
      misMatch: "5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다.",
      duplicate: "이미 사용중인 아이디입니다.",
    },
    errorMessageElement: _q(ERROR_MSG_ID.userId),
    passMessage: "사용 가능한 아이디입니다.",
  },

  password: {
    inputElement: _q(FORM_ID.password),
    selectErrorMessage() {
      const password = this.inputElement.value;
      if (password.length < LIMITED_LENGTH.password_min || password.length > LIMITED_LENGTH.password_max) {
        return this.errorMessage.range;
      }
      if (!PATTERN.password.upperCase.test(password)) {
        return this.errorMessage.upperCase;
      }
      if (!PATTERN.password.number.test(password)) {
        return this.errorMessage.number;
      }
      if (!PATTERN.password.sign.test(password)) {
        return this.errorMessage.sign;
      }
      return null;
    },
    errorMessage: {
      range: "8자 이상 16자 이하로 입력해주세요.",
      upperCase: "영문 대문자를 최소 1자 이상 포함해주세요.",
      number: "숫자를 최소 1자 이상 포함해주세요.",
      sign: "특수문자를 최소 1자 이상 포함해주세요.",
    },
    errorMessageElement: _q(ERROR_MSG_ID.password),
    passMessage: "안전한 비밀번호입니다.",
  },

  checkPassword: {
    inputElement: _q(FORM_ID.checkPassword),
    isFieldValid() {
      const password = _q(FORM_ID.password).value;
      const checkPassword = this.inputElement.value;
      return password === checkPassword;
    },
    selectErrorMessage() {
      if (!this.isFieldValid()) return this.errorMessage;
      return null;
    },
    errorMessageElement: _q(ERROR_MSG_ID.checkPassword),
    errorMessage: "비밀번호가 일치하지 않습니다.",
    passMessage: "비밀번호가 일치합니다.",
  },

  birthDay: {
    inputElement: {
      year: _q(FORM_ID.year),
      month: _q(FORM_ID.month),
      day: _q(FORM_ID.day),
    },
    selectErrorMessage() {
      const year = this.inputElement.year.value;
      const month = this.inputElement.month.value;
      const day = this.inputElement.day.value;
      const today = new Date();
      const thisYear = today.getFullYear();
      const age = thisYear - year + 1;
      if (!this.isValidYear(age)) return this.errorMessage.year;
      if (!this.isValidAge(age, month)) return this.errorMessage.age;
      if (this.isValidDayinMonth(month, day)) return this.errorMessage.day;
      return null;
    },
    isValidYear(age) {
      if (age >= LIMITED_LENGTH.age_min && age <= LIMITED_LENGTH.age_max) return true;
      return false;
    },
    isValidAge(age, month) {
      if (age >= LIMITED_LENGTH.age_min) return true;
      return false;
    },
    isValidDayinMonth(month, day) {
      const validDay = daysInMonth(month);
      if (day < 1 || day > validDay) return true;
      return false;
    },
    errorMessageElement: _q(ERROR_MSG_ID.birthday),
    errorMessage: {
      year: "태어난 년도 4자리를 정확하게 입력하세요.",
      age: "만 14세 이상만 가입 가능합니다.",
      day: "태어난 날짜를 다시 확인해주세요.",
    },
    passMessage: "",
  },

  name: {
    inputElement: _q(FORM_ID.name),
    selectErrorMessage() {
      return null;
    },
  },

  email: {
    inputElement: _q(FORM_ID.email),
    selectErrorMessage() {
      if (!this.isFieldValid()) return this.errorMessage;
      return null;
    },
    isFieldValid() {
      const email = this.inputElement.value;
      const emailRegexp = PATTERN.email;
      return email !== "" && emailRegexp.test(email);
    },
    errorMessageElement: _q(ERROR_MSG_ID.email),
    errorMessage: "이메일 주소를 다시 확인해주세요.",
    passMessage: "",
  },

  phoneNumber: {
    inputElement: _q(FORM_ID.phoneNumber),
    selectErrorMessage() {
      if (!this.isFieldValid()) return this.errorMessage;
      return null;
    },
    isFieldValid() {
      const phoneNumber = this.inputElement.value;
      const phoneNumberRegexp = PATTERN.phoneNumber;
      return phoneNumber !== "" && phoneNumberRegexp.test(phoneNumber);
    },
    errorMessageElement: _q(ERROR_MSG_ID.phoneNumber),
    errorMessage: "형식에 맞지 않는 번호입니다.",
    passMessage: "",
  },
};
