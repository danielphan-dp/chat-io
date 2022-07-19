import React from 'react';
import CustomPrimaryButton from '../../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../../shared/components/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const getFormNotValidMessage = () => {
  return 'Username should contains between 3 and 12 characters and password should contains between 6 and 12 character. Also correct e-mail address should be provided.';
};

const getFormValidMessage = () => {
  return 'Press to register!';
};

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushToLoginPage = () => {
    navigate('/login');
  };

  return (
    <React.Fragment>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="REGISTER"
            additionalStyles={{
              marginTop: '30px',
            }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text=""
        redirectText="Already have an account?"
        redirectHandler={handlePushToLoginPage}
        additionalStyles={{ marginTop: '5px' }}
      />
    </React.Fragment>
  );
};

export default RegisterPageFooter;
