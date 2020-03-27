import { _q, addClass, removeClass } from "./util.js";
import { FORM_ID, CHIP_ELEMENT_CLASS_NAME } from "./constants.js";
import { validateInputForms, validateSelectForms, validateDuplicateId, preventKeypressExceptNum } from "./validation.js";
import { generateChip } from "./generateChip.js";
import userData from "./userData.js";

const signupForm = _q(FORM_ID.form);
const interest = _q(FORM_ID.interest);
const buttons = _q(FORM_ID.buttons);

signupForm.addEventListener("keyup", event => {
  validateInputForms(event);
  generateChip(event);
});

signupForm.addEventListener("change", event => {
  validateDuplicateId(event);
  validateSelectForms(event);
});

signupForm.addEventListener("keypress", event => preventKeypressExceptNum(event));

interest.addEventListener("focus", () => addClass(_q(`.${CHIP_ELEMENT_CLASS_NAME.wrap}`), "focus"));
interest.addEventListener("blur", () => removeClass(_q(`.${CHIP_ELEMENT_CLASS_NAME.wrap}`), "focus"));

buttons.addEventListener("click", event => {
  event.preventDefault();
  if (event.target === _q(".submit-btn")) console.log(userData);
});
