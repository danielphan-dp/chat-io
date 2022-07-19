const validateMail = (mail) => {
  const emailRegexPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegexPattern.test(mail);
};

const validatePassword = (password) => {
  const l = password.length;
  // TODO: perform extra checks if needed
  return 6 < l && l < 12;
};

const validateUsername = (username) => {
  const l = username.length;
  // TODO: perform extra checks if needed
  return 2 < l && l < 13;
};

export const validateRegisterForm = ({ mail, password, username }) => {
  const isMailValid = validateMail(mail);
  const isPasswordValid = validatePassword(password);
  const isUsernameValid = validateUsername(username);
  return isMailValid && isPasswordValid && isUsernameValid;
};

export const validateLoginForm = ({ mail, password }) => {
  const isMailValid = validateMail(mail);
  const isPasswordValid = validatePassword(password);
  return isMailValid && isPasswordValid;
};
