export const _q = str => {
  return document.querySelector(str);
};

export const _qa = str => {
  return document.querySelectorAll(str);
};

export const pipe = (...fns) => value => fns.reduce((acc, fn) => fn(acc), value);

export const daysInMonth = num => {
  switch (num) {
    case "2":
      return 28;
    case "4":
    case "6":
    case "9":
    case "11":
      return 30;
    default:
      return 31;
  }
};

export const toggleClass = (target = null, addClassName, removeClassName) => {
  if (!target || target.classList.contains(addClassName)) return;
  target.classList.add(addClassName);
  target.classList.remove(removeClassName);
};
