import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';
import RedirectInfo from '../../../shared/components/RedirectInfo';
import CustomPrimaryButton from '../../../shared/components/CustomPrimaryButton';

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();
  return (
    <>
      <Tooltip
        title={
          !isFormValid
            ? 'Enter correct e-mail address and password should contains between 6 and 12 characters.'
            : 'Press to log in!'
        }
      >
        <div>
          <CustomPrimaryButton
            label="LOG IN"
            additionalStyles={{ marginTop: '30px' }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        additionalStyles={{ marginTop: '5px' }}
        text="Need an account? "
        redirectText="Create an account"
        redirectHandler={() => navigate('/register')}
      />
    </>
  );
};

export default LoginPageFooter;
