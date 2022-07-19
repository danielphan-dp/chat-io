import React from 'react';
import InputsWithLabels from '../../../shared/components/InputWithLabels';

const LoginPageInputs = ({ mail, setMail, password, setPassword }) => {
  return (
    <React.Fragment>
      <InputsWithLabels
        value={mail}
        setValue={setMail}
        label="E-mail"
        type="text"
        placeholder="Enter e-mail address"
      />
      <InputsWithLabels
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter password"
      />
    </React.Fragment>
  );
};

export default LoginPageInputs;
