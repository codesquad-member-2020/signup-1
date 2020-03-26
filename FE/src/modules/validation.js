import inputFields from "./inputFields.js";
import userData from "./userData.js";
import { _q, toggleClass } from "./util.js";
import { NUM_KEY_CODE_ZERO, NUM_KEY_CODE_NINE, TOGGLE_CLASS } from "./constants.js";

const generateErrorMessage = (element = null, message) => {
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
      generateErrorMessage(messageElement, errorMessage);
    }
  });
};

const preventKeypressExceptNum = event => {
  const { year } = inputFields.birthDay.inputElement;
  const { day } = inputFields.birthDay.inputElement;
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
signupForm.addEventListener("keypress", event => preventKeypressExceptNum(event));

buttons.addEventListener("click", event => {
  event.preventDefault();
  if (event.target === _q(".submit-btn")) console.log(userData);
});
