'use client'
import React, { useState } from "react";
import Link from "next/link";
import { signIn } from 'next-auth/react';
import LearnUButton from "./LearnUButton";
import { useSearchParams } from "next/navigation";
import { AES } from "crypto-js";

export default function SignInUp() {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [signUpCredentials, setSignUpCredentials] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/home'
  console.log(callbackUrl);
  const handleToggleForm = () => {
    setLoginFormVisible(!isLoginFormVisible);
  };

  function handleSubmitCredentials(e) {
    e.preventDefault();
    if (credentials.email === "" || credentials.password === "") {
      return;
    }
    const encryptedPassword = AES.encrypt(credentials.password, process.env.NEXT_PUBLIC_ENCRYPTION_KEY).toString()
    const userCrendentials = { ...credentials, password: encryptedPassword }
    signIn('credentials', { callbackUrl: callbackUrl, ...userCrendentials })
  }
  async function handleSubmitSignUp(e) {
    e.preventDefault();
    const res = await fetch('api/auth/sign-up', {
      method: 'POST',
      body: JSON.stringify(signUpCredentials),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(res);
    if (res.ok) {
      setError(null)
      const user = await res.json()
      await signIn('credentials', { callbackUrl: callbackUrl, ...user })
    }
    else if (res.status === 400) {
      setError('Email already exists')
    }
  }
  return (
    <div className={
      `h-screen w-full max-md:px-4 ${isLoginFormVisible ? 'mb-24 max-sm:mb-16 md:mb-0' : 'mb-32 max-sm:mb-24 md:mb-0'} max-sm:pt-8 flex items-center justify-center`
    }>
      <div className="bg-white bg-opacity-50 backdrop-blur-xl p-8 rounded-2xl shadow-xl">
        <div className="flex flex-col sm:flex-row justify-center md:justify-around items-center">
          <div onClick={() => signIn('github', { callbackUrl: callbackUrl })}>
            <LearnUButton className={"my-4"} text="Sign In with GitHub" />
          </div>
          <div onClick={() => signIn('google', { callbackUrl: callbackUrl })}>
            <LearnUButton className={"my-4"} text="Sign In with Google" />
          </div>
        </div>
        {isLoginFormVisible ? (
          <form onSubmit={(e) => handleSubmitCredentials(e)}>
            <h2 className="text-sky-500 font-semibold text-2xl pb-5">Login</h2>

            <input
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              type="email"
              placeholder="Email"
              required
              className="w-full py-2 px-1 text-gray-400 mb-8 border-b border-gray-500 outline-none bg-transparent"
            />
            <input
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              type="password"
              placeholder="Password"
              required
              className="w-full py-2 px-1 text-gray-400 mb-8 border-b border-gray-500 outline-none bg-transparent"
            />
            <LearnUButton className="max-sm:w-full" text="Sign In" onClick={() => signIn('credentials')} />
            <div>
              <p className="message text-gray-400 mt-6 inline-block mr-2">
                Not registered?{' '}
              </p>
              <p href="#" onClick={handleToggleForm} className="text-blue-500 animatedUnderline inline-block">
                Create an account
              </p>
            </div>
          </form>
        ) : (
          <form onSubmit={(e) => handleSubmitSignUp(e)}>
            <h2 className="text-sky-500 font-semibold text-2xl pb-5">Register</h2>
            <input
              value={signUpCredentials.username}
              onChange={(e) => setSignUpCredentials({ ...signUpCredentials, username: e.target.value })}
              type="text"
              placeholder="Username *"
              required
              className="w-full py-2 px-1 text-gray-400 mb-8 border-b border-gray-500 outline-none bg-transparent"
            />
            <input
              value={signUpCredentials.email}
              onChange={(e) => setSignUpCredentials({ ...signUpCredentials, email: e.target.value })}
              type="email"
              placeholder="Email *"
              required
              className="w-full py-2 px-1 text-gray-400 mb-8 border-b border-gray-500 outline-none bg-transparent"
            />
            <input
              value={signUpCredentials.password}
              onChange={(e) => setSignUpCredentials({ ...signUpCredentials, password: e.target.value })}
              type="password"
              placeholder="Password *"
              required
              className="w-full py-2 px-1 text-gray-400 mb-8 border-b border-gray-500 outline-none bg-transparent"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <LearnUButton text="Sign Up" />
            <div className="">
              <p className="message text-gray-400 mt-6 inline-block mr-2">
                Already registered?{' '}
              </p>
              <p onClick={handleToggleForm}
                className="text-blue-500 animatedUnderline">
                Sign In
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
