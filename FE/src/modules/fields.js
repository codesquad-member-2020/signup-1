import { PATTERN, FORM_ID, LIMITED_LENGTH, ERROR_MSG_ID, ERROR_MESSAGE, PASS_MESSAGE, PASS } from "./constants.js";
import { getSizeofChip } from "./interestChip.js";
import { _q, daysInMonth } from "./util.js";

export const selectFields = {
  gender: {
    selectElement: _q(FORM_ID.gender),
    isSelected() {
      return this.selectElement.value !== "";
    },
  },
  month: {
    selectElement: _q(FORM_ID.month),
    isSelected() {
      return this.selectElement.value !== "";
    },
  },
};

export const inputFields = {
  userId: {
    inputElement: _q(FORM_ID.userId),
    selectErrorMessage(valid = null) {
      if (!this.isFieldValid()) return this.errorMessage.misMatch;
      if (valid === null) return null;
      if (valid) return this.errorMessage.duplicate;
      return PASS;
    },
    isFieldValid() {
      const userId = this.inputElement.value;
      const userIdRegex = PATTERN.userId;
      return userId !== "" && userIdRegex.test(userId);
    },
    errorMessage: {
      misMatch: ERROR_MESSAGE.userID.misMatch,
      duplicate: ERROR_MESSAGE.userID.duplicate,
    },
    errorMessageElement: _q(ERROR_MSG_ID.userId),
    passMessage: PASS_MESSAGE.userID,
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
      return PASS;
    },
    errorMessage: {
      range: ERROR_MESSAGE.password.range,
      upperCase: ERROR_MESSAGE.password.upperCase,
      number: ERROR_MESSAGE.password.number,
      sign: ERROR_MESSAGE.password.sign,
    },
    errorMessageElement: _q(ERROR_MSG_ID.password),
    passMessage: PASS_MESSAGE.password,
  },

  checkPassword: {
    inputElement: _q(FORM_ID.checkPassword),
    isFieldValid() {
      const password = inputFields.password.inputElement.value;
      const passwordErrorMessage = inputFields.password.selectErrorMessage();
      const checkPassword = this.inputElement.value;
      return passwordErrorMessage === PASS && password === checkPassword;
    },
    selectErrorMessage() {
      if (!this.isFieldValid()) return this.errorMessage;
      return PASS;
    },
    errorMessageElement: _q(ERROR_MSG_ID.checkPassword),
    errorMessage: ERROR_MESSAGE.checkPassword,
    passMessage: PASS_MESSAGE.checkPassword,
  },

  year: {
    inputElement: _q(FORM_ID.year),
    selectErrorMessage() {
      const year = this.inputElement.value;
      const today = new Date();
      const thisYear = today.getFullYear();
      const age = thisYear - year + 1;
      if (!this.isValidYear(age)) return this.errorMessage;
      return PASS;
    },
    isValidYear(age) {
      if (age >= LIMITED_LENGTH.age_min && age <= LIMITED_LENGTH.age_max) return true;
      return false;
    },
    errorMessageElement: _q(ERROR_MSG_ID.birthday),
    errorMessage: ERROR_MESSAGE.year,
    passMessage: "",
  },

  day: {
    inputElement: _q(FORM_ID.day),
    selectErrorMessage() {
      const month = selectFields.month.selectElement.value;
      const day = this.inputElement.value;
      if (this.isValidDayinMonth(month, day)) return this.errorMessage;
      return PASS;
    },
    isValidDayinMonth(month, day) {
      const validDay = daysInMonth(month);
      if (day < 1 || day > validDay) return true;
      return false;
    },
    errorMessageElement: _q(ERROR_MSG_ID.birthday),
    errorMessage: ERROR_MESSAGE.day,
    passMessage: "",
  },

  name: {
    inputElement: _q(FORM_ID.name),
    selectErrorMessage() {
      return PASS;
    },
  },

  email: {
    inputElement: _q(FORM_ID.email),
    selectErrorMessage() {
      if (!this.isFieldValid()) return this.errorMessage;
      return PASS;
    },
    isFieldValid() {
      const email = this.inputElement.value;
      const emailRegexp = PATTERN.email;
      return email !== "" && emailRegexp.test(email);
    },
    errorMessageElement: _q(ERROR_MSG_ID.email),
    errorMessage: ERROR_MESSAGE.email,
    passMessage: "",
  },

  phoneNumber: {
    inputElement: _q(FORM_ID.phoneNumber),
    selectErrorMessage() {
      if (!this.isFieldValid()) return this.errorMessage;
      return PASS;
    },
    isFieldValid() {
      const phoneNumber = this.inputElement.value;
      const phoneNumberRegexp = PATTERN.phoneNumber;
      return phoneNumber !== "" && phoneNumberRegexp.test(phoneNumber);
    },
    errorMessageElement: _q(ERROR_MSG_ID.phoneNumber),
    errorMessage: ERROR_MESSAGE.phoneNumber,
    passMessage: "",
  },

  interest: {
    inputElement: _q(FORM_ID.interest),
    selectErrorMessage() {
      if (getSizeofChip() < LIMITED_LENGTH.interest) return this.errorMessage;
      return PASS;
    },
    errorMessageElement: _q(ERROR_MSG_ID.interest),
    errorMessage: ERROR_MESSAGE.interest,
    passMessage: "",
  },
};
