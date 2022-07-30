import React from 'react';
import InputsWithLabels from '../../../components/InputWithLabels';

const LoginPageInputs = ({
  mailHook: { mail, setMail },
  passwordHook: { password, setPassword },
}) => {
  return (
    <>
      <InputsWithLabels
        type="text"
        label="E-mail"
        valueHook={{ value: mail, setValue: setMail }}
        placeholder="Enter e-mail address"
      />
      <InputsWithLabels
        type="password"
        label="Password"
        valueHook={{ value: password, setValue: setPassword }}
        placeholder="Enter password"
      />
    </>
  );
};

export default LoginPageInputs;
