import { _q } from "./util.js";
import { FORM_ID } from "./constants.js";
import { validateInputForms, validateSelectForms, validateDuplicateId, preventKeypressExceptNum } from "./validation.js";
import { generateChips } from "./interestChip.js";
import userData from "./userData.js";
import addCustomFocusEventToInerest from "./interestFocus.js";

const signupForm = _q(FORM_ID.form);
const buttons = _q(FORM_ID.buttons);

signupForm.addEventListener("keyup", event => {
  generateChips(event);
  setTimeout(() => validateInputForms(event), 0);
});

signupForm.addEventListener("change", event => {
  validateDuplicateId(event);
  validateSelectForms(event);
});

signupForm.addEventListener("keypress", event => preventKeypressExceptNum(event));

addCustomFocusEventToInerest();

buttons.addEventListener("click", event => {
  event.preventDefault();
  if (event.target === _q(".submit-btn")) console.log(userData);
});
