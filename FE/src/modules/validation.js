import { _q, daysInMonth } from "./util.js";
import { PATTERN, FORM_ID, LIMITED_LENGTH, ERROR_MSG_ID, NUM_KEY_CODE_ZERO, NUM_KEY_CODE_NINE, TOGGLE_CLASS } from "./constants.js";

const fields = {
  userId: {
    inputElement: _q(FORM_ID.userId),
    isFieldValid() {
      const userId = this.inputElement.value;
      const userIdRegex = PATTERN.userId;
      return userId !== "" && userIdRegex.test(userId);
    },
    selectErrorMessage() {
      if (!this.isFieldValid()) return this.errorMessage.misMatch;
      return "";
    },
    errorMessage: {
      misMatch: "5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다.",
      overlap: "이미 사용중인 아이디입니다.",
    },
    errorMessageElement: _q(ERROR_MSG_ID.userId),
    passMessage: "사용 가능한 아이디입니다.",
  },

  password: {
    inputElement: _q(FORM_ID.password),
    isFieldValid() {
      const password = this.inputElement.value;
      const passwordRegex = PATTERN.password.all;
      return password !== "" && passwordRegex.test(password);
    },
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
      return "";
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
      return "";
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
    isFieldValid() {
      const year = this.inputElement.year.value;
      const month = this.inputElement.month.value;
      const day = this.inputElement.day.value;
      const today = new Date();
      const thisYear = today.getFullYear();
      const limitDay = daysInMonth(month);
      if (day < 1 || day > limitDay) console.log(this.inputElement.day);
    },
    selectErrorMessage() {
      this.isFieldValid();
    },
    errorMessageElement: _q(ERROR_MSG_ID.birthday),
    errorMessage: {
      year: "태어난 년도 4자리를 정확하게 입력하세요.",
      old: "만 14세 이상만 가입 가능합니다.",
      day: "태어난 날짜를 다시 확인해주세요.",
    },
    passMessage: "",
  },

  email: {
    inputElement: _q(FORM_ID.email),
    isFieldValid() {
      const email = this.inputElement.value;
      const emailRegexp = PATTERN.email;
      return email !== "" && emailRegexp.test(email);
    },
    selectErrorMessage() {
      if (!this.isFieldValid()) return this.errorMessage;
      return "";
    },
    errorMessageElement: _q(ERROR_MSG_ID.email),
    errorMessage: "이메일 주소를 다시 확인해주세요.",
    passMessage: "",
  },

  phoneNumber: {
    inputElement: _q(FORM_ID.phoneNumber),
    isFieldValid() {
      const phoneNumber = this.inputElement.value;
      const phoneNumberRegexp = PATTERN.phoneNumber;
      return phoneNumber !== "" && phoneNumberRegexp.test(phoneNumber);
    },
    selectErrorMessage() {
      if (!this.isFieldValid()) return this.errorMessage;
      return "";
    },
    errorMessageElement: _q(ERROR_MSG_ID.phoneNumber),
    errorMessage: "형식에 맞지 않는 번호입니다.",
    passMessage: "",
  },
};

const validateFormInputs = event => {
  if (event.target === fields.password.inputElement) {
    console.log(fields.password.selectErrorMessage());
  }
  if (event.target === fields.userId.inputElement) {
    console.log(fields.userId.selectErrorMessage());
  }
  if (event.target === fields.checkPassword.inputElement) {
    console.log(fields.checkPassword.selectErrorMessage());
  }
  if (event.target === fields.email.inputElement) {
    console.log(fields.email.selectErrorMessage());
  }
  if (event.target === fields.birthDay.inputElement.day) {
    console.log(fields.birthDay.selectErrorMessage());
    // console.log(fields.birthDay.inputElement.month.value);
    // console.log(fields.birthDay.inputElement.day.value);
  }
  if (event.target === fields.phoneNumber.inputElement) {
    console.log(fields.phoneNumber.selectErrorMessage());
  }
};

const preventKeypressExceptNum = event => {
  const yearInput = fields.birthDay.inputElement.year;
  const dayInput = fields.birthDay.inputElement.day;
  const phoneNumberInput = fields.phoneNumber.inputElement;
  if (event.target === yearInput || event.target === dayInput || event.target === phoneNumberInput) {
    if (event.keyCode < NUM_KEY_CODE_ZERO || event.keyCode > NUM_KEY_CODE_NINE) {
      event.returnValue = false;
    }
  }
};

const signupForm = _q("form");
const buttons = _q(".btn-wrap");

signupForm.addEventListener("input", event => validateFormInputs(event));
signupForm.addEventListener("keypress", event => preventKeypressExceptNum(event));
buttons.addEventListener("click", event => event.preventDefault());
