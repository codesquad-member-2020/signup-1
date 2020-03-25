export const _q = str => {
  return document.querySelector(str);
};

export const _qa = str => {
  return document.querySelectorAll(str);
};

export const pipe = (...fns) => value => fns.reduce((acc, fn) => fn(acc), value);
