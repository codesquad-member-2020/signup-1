import app from "./server.js";
import userData from "./userData.js";
import { inputFields, selectFields } from "./fields.js";
import { _q, toggleClass } from "./util.js";
import { KEY_CODE_ZERO, KEY_CODE_NINE, TOGGLE_CLASS, PASS } from "./constants.js";

const generateMessage = (element = null, message) => {
  if (!element) return;
  element.innerHTML = message;
};

const setUserData = (key, value) => userData.set(key, value);
const isValidatePassed = target => target === PASS;

export const validateInputForms = event => {
  Object.keys(inputFields).forEach(field => {
    const currentField = inputFields[field];
    if (event.target === currentField.inputElement) {
      let errorMessage = currentField.selectErrorMessage();
      const { errorMessageElement } = currentField;
      if (isValidatePassed(errorMessage)) {
        errorMessage = currentField.passMessage;
        setUserData(field, currentField.inputElement.value);
        toggleClass(errorMessageElement, TOGGLE_CLASS.pass, TOGGLE_CLASS.error);
      } else {
        setUserData(field, null);
        toggleClass(errorMessageElement, TOGGLE_CLASS.error, TOGGLE_CLASS.pass);
      }
      generateMessage(errorMessageElement, errorMessage);
    }
  });
};

export const validateDuplicateId = event => {
  const { userId } = inputFields;
  if (event.target === userId.inputElement) {
    const { value } = userId.inputElement;
    app.fetchData(value).then(response => {
      let errorMessage = userId.selectErrorMessage(response.valid);
      const { errorMessageElement } = userId;
      if (isValidatePassed(errorMessage)) {
        errorMessage = userId.passMessage;
        setUserData(userId, userId.inputElement.value);
        toggleClass(errorMessageElement, TOGGLE_CLASS.pass, TOGGLE_CLASS.error);
      } else {
        setUserData(userId, null);
        toggleClass(errorMessageElement, TOGGLE_CLASS.error, TOGGLE_CLASS.pass);
      }
      generateMessage(errorMessageElement, errorMessage);
    });
  }
};

export const validateSelectForms = event => {
  Object.keys(selectFields).forEach(field => {
    const currentField = selectFields[field];
    if (event.target === currentField.selectElement) {
      const isSelected = currentField.isSelected();
      if (isSelected) {
        const selectValue = currentField.selectElement.value;
        setUserData(field, selectValue);
      } else {
        setUserData(field, null);
      }
    }
  });
};

export const preventKeypressExceptNum = event => {
  const year = inputFields.year.inputElement;
  const day = inputFields.day.inputElement;
  const phoneNumber = inputFields.phoneNumber.inputElement;
  if (event.target === year || event.target === day || event.target === phoneNumber) {
    if (event.keyCode < KEY_CODE_ZERO || event.keyCode > KEY_CODE_NINE) {
      event.returnValue = false;
    }
  }
};
