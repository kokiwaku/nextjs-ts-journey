"use client";

import { FormEvent, useState, FC } from "react";
import { useRouter, redirect } from "next/navigation";
import { FRONT_API_ENDPOINT } from "@/constants/server";

const SignupTemplate: FC = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const isAbleToSubmit = email.trim() !== "" && password.trim() !== "";

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
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        throw new Error('Singup Fail!!');
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }

    // 認証OK
    redirect('/');
  }

  return (
    <>
      <h1>Sign up</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-el">
          <label htmlFor="email">email</label>
          <input type="text" id="email" value={ email } onChange={ (e) => setemail(e.target.value)}/>
        </div>
        <div className="form-el">
          <label htmlFor="password">password</label>
          <input type="password" id="password" value={password} onChange={(e) => setpassword(e.target.value)} />
        </div>
        <div className="button-el">
          <button type="submit" className="signupBtn" disabled={!isAbleToSubmit}>Sign up</button>
        </div>
      </form>

      <p className="auth-redirect-btn" onClick={() => router.push('/auth/login')}>or, login</p>
    </>
  );
}

export default SignupTemplate;