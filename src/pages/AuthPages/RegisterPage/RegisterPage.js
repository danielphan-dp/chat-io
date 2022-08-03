import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { getActions } from '../../../store/auth/auth.actions';
import { validateRegisterForm } from '../../../services/Validate/FormValidate.service';

import AuthBox from '../../../components/AuthBox';
import RegisterPageHeader from './RegisterPageHeader';
import RegisterPageInputs from './RegisterPageInputs';
import RegisterPageFooter from './RegisterPageFooter';

const RegisterPage = ({ register }) => {
  const [mail, setMail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(validateRegisterForm(mail, password, username));
  }, [mail, password, username, setIsFormValid]);

  // prettier-ignore
  return (
    <AuthBox>
      <RegisterPageHeader />
      <RegisterPageInputs
        mailHook={{ mail, setMail }}
        usernameHook={{ username, setUsername }}
        passwordHook={{ password, setPassword }}
      />
      <RegisterPageFooter
        isFormValid={isFormValid}
        handleRegister={() => register({ mail, password, username }, navigate)}
      />
    </AuthBox>
  );
};

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

// prettier-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage);
