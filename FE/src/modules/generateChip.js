import { pipe } from "./util.js";
import { inputFields } from "./fields.js";
import { COMMA } from "./constants.js";

export const chip = {
  chips: new Set(),
  getChip: () => this.chips,
  addChip: str => this.chips.add(str),
  deleteChip: str => this.chips.delete(str),
  getSizeofChip: () => this.chips.size,
  clearChip: () => this.chips.clear(),
};

const hasComma = str => {
  const restWord = str.slice(0, -1);
  return restWord.includes(COMMA);
};

const splitString = elem => elem.value.split(COMMA);
const arrayToString = arr => arr.reduce((acc, cur) => acc.concat(cur), "");
const removeTargetString = pipe(splitString, arrayToString);

export const generateChip = event => {
  const interest = inputFields.interest.inputElement;
  if (event.target === interest) {
    if (event.data === COMMA) {
      if (hasComma(interest.value)) {
        interest.value = removeTargetString(interest);
        return;
      }
      chip.addChip(interest.value);
      console.log(chip.getChip);
    }
  }
};
