'use client';

import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { redirect } from 'next/navigation';
import { AuthUser } from '@/types/auth';
import { FRONT_API_ENDPOINT } from '@/constants/server';
import CommonButton from '@/components/atoms/CommonButton';
import HrefText from '@/components/atoms/HrefText';

type RootLayoutProps = {
  user: AuthUser;
  children: React.ReactNode;
};
export default function ClientComponent() {
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
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-el">
          <label htmlFor="username">email</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="form-el">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div className="button-el">
          <CommonButton
            title="Login"
            type="submit"
            disabled={!isAbleToSubmit}
          />
        </div>
      </form>

      <HrefText text="or, signup" href="/auth/signup" />
    </>
  );
}
