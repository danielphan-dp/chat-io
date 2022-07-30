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
        valueHook={{ mail, setMail }}
      />
      <InputWithLabels
        type="text"
        label="Username"
        placeholder="Enter username"
        valueHook={{ username, setUsername }}
      />
      <InputWithLabels
        type="password"
        label="Password"
        placeholder="Enter password"
        valueHook={{ password, setPassword }}
      />
    </>
  );
};

export default RegisterPageInputs;
