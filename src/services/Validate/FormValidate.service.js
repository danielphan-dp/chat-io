import { validateMail, validatePassword, validateUsername } from './InputValidate.service';

export const validateRegisterForm = (mail, password, username) => {
  return validateMail(mail) && validatePassword(password) && validateUsername(username);
};

export const validateLoginForm = (mail, password) => {
  return validateMail(mail) && validatePassword(password);
};
