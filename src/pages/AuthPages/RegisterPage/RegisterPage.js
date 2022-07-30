import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { getActions } from '../../../store/actions/auth.actions';
import { validateRegisterForm } from '../../../shared/utils/validators';

import AuthBox from '../../../shared/components/AuthBox';
import RegisterPageHeader from './RegisterPageHeader';
import RegisterPageInputs from './RegisterPageInputs';
import RegisterPageFooter from './RegisterPageFooter';

const RegisterPage = ({ register }) => {
  let navigate = useNavigate();
  const [mail, setMail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

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
