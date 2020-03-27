import { _q, _qa, pipe, addClass } from "./util.js";
import { FORM_ID, KEY_CODE_BACKSPACE, KEY_CODE_COMMA, COMMA, CHIP_ELEMENT_CLASS_NAME, CHIP_ELEMENT_HTML } from "./constants.js";

const chips = new Set();
export const getSizeofChip = () => chips.size;
export const getChip = () => chips;
const addChip = str => chips.add(str);
const deleteChip = str => chips.delete(str);
const clearChip = () => chips.clear();
const getLastChip = set => {
  let value;
  for (value of set);
  return value;
};

const hasComma = str => str.includes(COMMA);
const splitStringbyComma = str => str.split(COMMA);
const arrayToString = arr => arr.reduce((acc, cur) => acc.concat(cur), "");
const removeComma = pipe(splitStringbyComma, arrayToString);

const resetChips = () => {
  const chipElement = _qa(`.${CHIP_ELEMENT_CLASS_NAME.div}`);
  if (chipElement) chipElement.forEach(eachChip => eachChip.remove());
};

const renderChips = () => {
  resetChips();
  const reverseChips = new Set([...chips].reverse());
  const interestElement = _q(`.${CHIP_ELEMENT_CLASS_NAME.wrap}`);
  reverseChips.forEach(chipValue => {
    interestElement.insertAdjacentHTML("afterbegin", CHIP_ELEMENT_HTML(chipValue));
  });
};

export const generateChips = event => {
  const interest = _q(FORM_ID.userId);
  if (event.target === interest) {
    if (event.keyCode === KEY_CODE_COMMA) {
      event.preventDefault();
      if (hasComma(interest.value)) {
        interest.value = removeComma(interest.value);
      }
      if (interest.value !== "") addChip(interest.value);
      interest.value = "";
      renderChips();
    }
    if (event.keyCode === KEY_CODE_BACKSPACE && interest.value === "") {
      deleteChip(getLastChip(chips));
      renderChips();
    }
  }
};
