import { _q, _qa, pipe } from "./util.js";
import { PATTERN, FORM_ID, ERROR_MSG_ID, TOGGLE_CLASS } from "./constants.js";

const isInputTag = elem => {
  return !!(elem.tagName === "INPUT" || elem.tagName === "SELECT");
};

const setInputPattern = (target, regExp) => {
  if (!isInputTag(target)) return;
  target.pattern = regExp;
};

const fields = {
  userId: {
    isFieldValid() {
      const userId = _q(FORM_ID.userId);
      const { value } = userId;
      const isValid = userId.validity.valid;
      return value !== "" && isValid;
    },
    errorMessage: {
      misMatch: "5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다.",
      overlap: "이미 사용중인 아이디입니다.",
    },
    errorMessageElement: _q(ERROR_MSG_ID.userId),
    passMessage: "사용 가능한 아이디입니다.",
  },

  password: {
    isFieldValid() {
      const password = _q(FORM_ID.password);
      const { value } = password;
      return value !== "";
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
    isFieldValid() {
      const password = _q(FORM_ID.password).value;
      return password !== "";
    },
    errorMessageElement: _q(ERROR_MSG_ID.checkPassword),
    errorMessage: "비밀번호가 일치하지 않습니다.",
    passMessage: "비밀번호가 일치합니다.",
  },
};

const init = () => {
  const userIdInput = _q(FORM_ID.userId);
  const passwordInput = _q(FORM_ID.password);
  const checkPasswordInput = _q(FORM_ID.checkPassword);
  const emailInput = _q(FORM_ID.email);
  const phoneNumberInput = _q(FORM_ID.phoneNumber);

  setInputPattern(userIdInput, PATTERN.userId);
  setInputPattern(passwordInput, PATTERN.password);
  setInputPattern(checkPasswordInput, PATTERN.password);
  setInputPattern(emailInput, PATTERN.email);
  setInputPattern(phoneNumberInput, PATTERN.phoneNumber);
};

init();

_q("form").addEventListener("input", e => {
  const tagName = e.target.name;
  let message = "";
  console.log(fields.userId.isFieldValid());
  switch (tagName) {
    case "userId":
      if (e.target.value === "") {
        return;
      }
      if (!e.target.validity.valid) {
        message = "5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다.";
        _q(ERROR_MSG_ID.userId).innerHTML = message;
        _q(ERROR_MSG_ID.userId).classList.add(TOGGLE_CLASS.error);
        _q(ERROR_MSG_ID.userId).classList.remove(TOGGLE_CLASS.pass);
      } else {
        message = "사용 가능한 아이디입니다.";
        _q(ERROR_MSG_ID.userId).innerHTML = message;
        _q(ERROR_MSG_ID.userId).classList.remove(TOGGLE_CLASS.error);
        _q(ERROR_MSG_ID.userId).classList.add(TOGGLE_CLASS.pass);
      }
      break;
    default:
      break;
  }
});

_q(".btn-wrap").addEventListener("click", e => {
  e.preventDefault();
});
