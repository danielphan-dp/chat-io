import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { getActions } from '../../../store/actions/auth.actions';
import { validateLoginForm } from '../../../services/validate.service';

import AuthBox from '../../../components/AuthBox';
import LoginPageHeader from './LoginPageHeader';
import LoginPageInputs from './LoginPageInputs';
import LoginPageFooter from './LoginPageFooter';

const LoginPage = ({ login }) => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(validateLoginForm(mail, password));
  }, [mail, password, setIsFormValid]);

  // prettier-ignore
  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs
        mailHook={{ mail, setMail }}
        passwordHook={{ password, setPassword }}
      />
      <LoginPageFooter
        isFormValid={isFormValid}
        handleLogin={() => login({ mail, password }, navigate)}
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
)(LoginPage);
