'use client';

import CommonButton from '@/components/atoms/CommonButton';
import HrefText from '@/components/atoms/HrefText';
import InputFormWithLabel from '@/components/molecules/InputFormWithLabel';
import styled from 'styled-components';
import { useAuthContext } from '@/context/AuthContext';
import { useLoginForm } from './useLoginForm';

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  gap: 0.5rem;

  div {
    display: flex;
    justify-content: center;
    gap: 0.5rem;

    label {
      width: 5rem;
    }
  }
`;
const LoginForm: React.FC = () => {
  const [
    { email, password, isAbleToSubmit },
    { handleSubmit, handleSetEmail, handleSetPassword },
  ] = useLoginForm();
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <InputFormWithLabel
            type="email"
            id="email"
            value={email}
            onChange={handleSetEmail}
          />
        </div>
        <div>
          <InputFormWithLabel
            type="password"
            id="password"
            value={password}
            onChange={handleSetPassword}
          />
        </div>
        <div>
          <CommonButton
            title="Login"
            type="submit"
            disabled={!isAbleToSubmit}
          />
        </div>
      </StyledForm>

      <HrefText text="or, signup" href="/auth/signup" />
    </>
  );
};

export default LoginForm;
