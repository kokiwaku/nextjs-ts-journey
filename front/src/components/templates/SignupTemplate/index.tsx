'use client';

import { FormEvent, useState } from 'react';
import { useRouter, redirect } from 'next/navigation';
import { FRONT_API_ENDPOINT } from '@/constants/server';
import CommonButton from '@/components/atoms/CommonButton';
import HrefText from '@/components/atoms/HrefText';
import InputForm from '@/components/atoms/InputForm';

const SignupTemplate: React.FC = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const isAbleToSubmit = email.trim() !== '' && password.trim() !== '';

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const payload = {
      email,
      name: email,
      password,
    };

    try {
      const response = await fetch(`${FRONT_API_ENDPOINT}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error('Singup Fail!!');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }

    // 認証OK
    redirect('/');
  };

  return (
    <>
      <h1>Sign up</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-el">
          <label htmlFor="email">email</label>
          <InputForm
            type="text"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="form-el">
          <label htmlFor="password">password</label>
          <InputForm
            type="password"
            id="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div className="button-el">
          <CommonButton
            title="Sign up"
            type="submit"
            disabled={!isAbleToSubmit}
          />
        </div>
      </form>

      <HrefText text="or, login" href="/auth/login" />
    </>
  );
};

export default SignupTemplate;
