'use client'
import React, { useState } from "react";
import Link from "next/link";
import { signIn } from 'next-auth/react';
import LearnUButton from "./LearnUButton";
import { useSearchParams } from "next/navigation";

export default function SignInUp() {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl')
  const handleToggleForm = () => {
    setLoginFormVisible(!isLoginFormVisible);
  };

  function handleSubmit(e) {
    e.preventDefault();
    signIn('credentials', { callbackUrl: callbackUrl, ...credentials })
  }

  return (
    <div className="min-h-screen flex items-center justify-center mx-2 md:mx-0">
      <div className="bg-white bg-opacity-50 backdrop-blur-xl p-8 rounded-2xl shadow-xl">
        <div className="flex flex-col sm:flex-row justify-around">
          <div onClick={() => signIn('github', { callbackUrl: callbackUrl })}>
            <LearnUButton className={"my-4"} text="Sign In with GitHub" />
          </div>
          <div onClick={() => signIn('google', { callbackUrl: callbackUrl })}>
            <LearnUButton className={"my-4"} text="Sign In with Google" />
          </div>
        </div>
        {isLoginFormVisible ? (
          <form onSubmit={(e) => handleSubmit(e)}>
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
            <LearnUButton text="Sign In" onClick={() => signIn('credentials')} />
            <p className="message text-gray-400 text-sm mt-6">
              Not registered?{' '}
              <Link href="#" onClick={handleToggleForm} className="text-blue-500">
                Create an account
              </Link>
            </p>
          </form>
        ) : (
          <form>
            <h2 className="text-sky-500 font-semibold text-2xl pb-5">Register</h2>
            <input
              type="text"
              placeholder="Username *"
              required
              className="w-full py-2 px-1 text-gray-400 mb-8 border-b border-gray-500 outline-none bg-transparent"
            />
            <input
              type="email"
              placeholder="Email *"
              required
              className="w-full py-2 px-1 text-gray-400 mb-8 border-b border-gray-500 outline-none bg-transparent"
            />
            <input
              type="password"
              placeholder="Password *"
              required
              className="w-full py-2 px-1 text-gray-400 mb-8 border-b border-gray-500 outline-none bg-transparent"
            />

            <LearnUButton text="Sign Up" />
            <p className="message text-gray-400 text-sm mt-6">
              Already registered?{' '}
              <Link href="#" onClick={handleToggleForm} className="text-blue-500">
                Sign In
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
