export const PATTERN = {
  userId: "^[a-z0-9-_]{5,20}$",
  password: "^(?=.*[A-Za-z])(?=.*d)(?=.*[!@#$%^&*_+~])[A-Za-zd!@#$%^&*_+~]{8,16}$",
  email: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
  phoneNumber: "^(010)(d{7,8})$",
  year: "^(0-9)$",
};

export const LIMITED_LENGTH = {
  userId: 20,
  password: 16,
  year: 4,
};

export const FORM_ID = {
  userId: "#userId",
  password: "#password",
  checkPassword: "#check-password",
  email: "#email",
  phoneNumber: "#phoneNumber",
  name: "#name",
  year: "#year",
  month: "#month",
  day: "#day",
  gender: "#gender",
  interest: "#interest",
};

export const ERROR_MSG_ID = {
  userId: "#error-msg-id",
  password: "#error-msg-password",
  checkPassword: "#error-msg-check-password",
  email: "#error-msg-email",
  phoneNumber: "#error-msg-phoneNumber",
  birthday: "#error-msg-birthday",
  interest: "#error-msg-interest",
};

export const TOGGLE_CLASS = {
  pass: "pass",
  error: "error",
  focus: "forus",
  hidden: "hidden",
  disabled: "disabled",
};
