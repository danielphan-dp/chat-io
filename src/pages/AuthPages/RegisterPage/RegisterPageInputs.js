import React from 'react';
import InputWithLabels from '../../../components/InputWithLabels';

const RegisterPageInputs = ({
  mailHook: { mail, setMail },
  usernameHook: { username, setUsername },
  passwordHook: { password, setPassword },
}) => {
  return (
    <>
      <InputWithLabels
        type="text"
        label="E-mail Address"
        placeholder="Enter e-mail address"
        valueHook={{ value: mail, setValue: setMail }}
      />
      <InputWithLabels
        type="text"
        label="Username"
        placeholder="Enter username"
        valueHook={{ value: username, setValue: setUsername }}
      />
      <InputWithLabels
        type="password"
        label="Password"
        placeholder="Enter password"
        valueHook={{ value: password, setValue: setPassword }}
      />
    </>
  );
};

export default RegisterPageInputs;
