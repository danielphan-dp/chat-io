import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateLoginForm } from 'src/services/validate/FormValidate.service';
import AuthBox from 'src/components/AuthBox';
import LoginPageHeader from './LoginPageHeader';
import LoginPageInputs from './LoginPageInputs';
import LoginPageFooter from './LoginPageFooter';
import { getActions } from 'src/store/auth/auth.actions';
import { connect } from 'react-redux';

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
