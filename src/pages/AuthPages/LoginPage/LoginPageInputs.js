import React from 'react';
import InputsWithLabels from '../../../shared/components/InputWithLabels';

const LoginPageInputs = ({
  mailHook: { mail, setMail },
  passwordHook: { password, setPassword },
}) => {
  return (
    <>
      <InputsWithLabels
        type="text"
        label="E-mail"
        valueHook={{ mail, setMail }}
        placeholder="Enter e-mail address"
      />
      <InputsWithLabels
        type="password"
        label="Password"
        valueHook={{ password, setPassword }}
        placeholder="Enter password"
      />
    </>
  );
};

export default LoginPageInputs;
