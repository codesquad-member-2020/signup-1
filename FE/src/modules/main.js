import { _q } from "./util.js";
import { validateInputForms, validateSelectForms, validateDuplicateId, preventKeypressExceptNum } from "./validation.js";
import userData from "./userData.js";

const signupForm = _q("form");
const buttons = _q(".btn-wrap");

signupForm.addEventListener("input", event => {
  validateInputForms(event);
});
signupForm.addEventListener("change", event => {
  validateDuplicateId(event);
  validateSelectForms(event);
});
signupForm.addEventListener("keypress", event => preventKeypressExceptNum(event));

buttons.addEventListener("click", event => {
  event.preventDefault();
  if (event.target === _q(".submit-btn")) console.log(userData);
});
