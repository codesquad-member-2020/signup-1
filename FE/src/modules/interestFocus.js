import { _q, addClass, removeClass } from "./util.js";
import { FORM_ID, CHIP_ELEMENT_CLASS_NAME } from "./constants.js";

const interest = _q(FORM_ID.interest);

export default () => {
  interest.addEventListener("focus", () => addClass(_q(`.${CHIP_ELEMENT_CLASS_NAME.wrap}`), "focus"));
  interest.addEventListener("blur", () => removeClass(_q(`.${CHIP_ELEMENT_CLASS_NAME.wrap}`), "focus"));
};
