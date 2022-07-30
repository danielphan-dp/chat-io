import React from 'react';
import InputWithLabels from '../../../shared/components/InputWithLabels';

const RegisterPageInputs = ({ mail, setMail, username, setUsername, password, setPassword }) => {
  return (
    <>
      <InputWithLabels
        value={mail}
        setValue={setMail}
        label="E-mail Address"
        type="text"
        placeholder="Enter e-mail address"
      />
      <InputWithLabels
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder="Enter username"
      />
      <InputWithLabels
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter password"
      />
    </>
  );
};

export default RegisterPageInputs;
