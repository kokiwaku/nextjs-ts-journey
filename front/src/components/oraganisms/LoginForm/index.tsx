'use client';

import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { redirect } from 'next/navigation';
import { FRONT_API_ENDPOINT } from '@/constants/server';
import CommonButton from '@/components/atoms/CommonButton';
import HrefText from '@/components/atoms/HrefText';
import InputFormWithLabel from '@/components/molecules/InputFormWithLabel';
import styled from 'styled-components';

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
  const dispatch = useDispatch();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const isAbleToSubmit = email.trim() !== '' && password.trim() !== '';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const payload = {
      email,
      password,
    };
    try {
      const response = await fetch(`${FRONT_API_ENDPOINT}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // response check
      if (!response.ok) {
        throw new Error('Fail to login..');
      }
      const responseJson = await response.json();
      if (responseJson === null) {
        throw new Error('Fail to login..');
      }
    } catch (error) {
      console.error('error:', error);
    }

    // 認証OK
    redirect('/');
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <InputFormWithLabel
            type="text"
            id="username"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div>
          <InputFormWithLabel
            type="password"
            id="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
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
