import { _q, _qa, pipe, addClass } from "./util.js";
import { inputFields } from "./fields.js";
import { KEY_CODE_BACKSPACE, KEY_CODE_COMMA, COMMA, CHIP_ELEMENT_CLASS_NAME, CHIP_ELEMENT_HTML } from "./constants.js";

export const chips = new Set();
const getChip = () => chips;
const addChip = str => chips.add(str);
const deleteChip = str => chips.delete(str);
const getSizeofChip = () => chips.size;
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

export const resetChips = () => {
  const chipElement = _qa(`.${CHIP_ELEMENT_CLASS_NAME.div}`);
  if (chipElement) chipElement.forEach(eachChip => eachChip.remove());
};

export const renderChips = () => {
  resetChips();
  const reverseChips = new Set([...chips].reverse());
  const interestElement = _q(`.${CHIP_ELEMENT_CLASS_NAME.wrap}`);
  reverseChips.forEach(chipValue => {
    interestElement.insertAdjacentHTML("afterbegin", CHIP_ELEMENT_HTML(chipValue));
  });
};

export const generateChip = event => {
  const interest = inputFields.interest.inputElement;
  if (event.target === interest) {
    if (event.keyCode === KEY_CODE_COMMA) {
      event.preventDefault();
      if (hasComma(interest.value)) {
        interest.value = removeComma(interest.value);
      }
      addChip(interest.value);
      interest.value = "";
      renderChips();
    }
    if (event.keyCode === KEY_CODE_BACKSPACE && interest.value === "") {
      deleteChip(getLastChip(chips));
      renderChips();
    }
  }
};
