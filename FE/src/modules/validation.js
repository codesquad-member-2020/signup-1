import { _q, _qa, pipe } from "./util.js";
import { PATTERN, FORM_ID, LIMITED_LENGTH, ERROR_MSG_ID, TOGGLE_CLASS } from "./constants.js";

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
  // const tagName = e.target.name;
  // let message = "";
  // console.log(fields.userId.isFieldValid());
  // switch (tagName) {
  //   case "userId":
  //     if (e.target.value === "") {
  //       return;
  //     }
  //     if (!e.target.validity.valid) {
  //       message = "5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다.";
  //       _q(ERROR_MSG_ID.userId).innerHTML = message;
  //       _q(ERROR_MSG_ID.userId).classList.add(TOGGLE_CLASS.error);
  //       _q(ERROR_MSG_ID.userId).classList.remove(TOGGLE_CLASS.pass);
  //     } else {
  //       message = "사용 가능한 아이디입니다.";
  //       _q(ERROR_MSG_ID.userId).innerHTML = message;
  //       _q(ERROR_MSG_ID.userId).classList.remove(TOGGLE_CLASS.error);
  //       _q(ERROR_MSG_ID.userId).classList.add(TOGGLE_CLASS.pass);
  //     }
  //     break;
  //   default:
  //     break;
  // }
};

const signupForm = _q("form");
signupForm.addEventListener("input", event => validateFormInputs(event));

_q(".btn-wrap").addEventListener("click", e => {
  e.preventDefault();
});
