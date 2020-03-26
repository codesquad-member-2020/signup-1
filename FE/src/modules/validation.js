import { inputFields, selectFields } from "./fields.js";
import userData from "./userData.js";
import { _q, toggleClass } from "./util.js";
import { NUM_KEY_CODE_ZERO, NUM_KEY_CODE_NINE, TOGGLE_CLASS } from "./constants.js";

const generateMessage = (element = null, message) => {
  if (!element) return;
  element.innerHTML = message;
};

const setUserData = (key, value) => {
  return userData.set(key, value);
};

const validateInputForms = event => {
  Object.keys(inputFields).forEach(field => {
    const currentField = inputFields[field];
    if (event.target === currentField.inputElement) {
      let errorMessage = currentField.selectErrorMessage();
      const messageElement = currentField.errorMessageElement;
      if (errorMessage === null) {
        const inputValue = currentField.inputElement.value;
        const { passMessage } = currentField;
        errorMessage = passMessage;
        setUserData(field, inputValue);
        toggleClass(messageElement, TOGGLE_CLASS.pass, TOGGLE_CLASS.error);
      } else {
        setUserData(field, null);
        toggleClass(messageElement, TOGGLE_CLASS.error, TOGGLE_CLASS.pass);
      }
      generateMessage(messageElement, errorMessage);
    }
  });
};

const validateSelectForms = event => {
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

const preventKeypressExceptNum = event => {
  const year = inputFields.year.inputElement;
  const day = inputFields.day.inputElement;
  const phoneNumber = inputFields.phoneNumber.inputElement;
  if (event.target === year || event.target === day || event.target === phoneNumber) {
    if (event.keyCode < NUM_KEY_CODE_ZERO || event.keyCode > NUM_KEY_CODE_NINE) {
      event.returnValue = false;
    }
  }
};

const signupForm = _q("form");
const buttons = _q(".btn-wrap");

signupForm.addEventListener("input", event => validateInputForms(event));
signupForm.addEventListener("change", event => validateSelectForms(event));
signupForm.addEventListener("keypress", event => preventKeypressExceptNum(event));

buttons.addEventListener("click", event => {
  event.preventDefault();
  if (event.target === _q(".submit-btn")) console.log(userData);
});
