import inputFields from "./fields.js";

export const chip = {
  chips: new Set(),
  getChip: () => this.chips,
  addChip: str => this.chips.set(str),
  deleteChip: str => this.chips.delete(str),
  getSizeofChip: () => this.chips.size,
  clearChip: () => this.chips.clear(),
};

export const generateChip = event => {
  const interest = inputFields.interest.inputElement;
  // if (event.target === interest) {
  // }
};
