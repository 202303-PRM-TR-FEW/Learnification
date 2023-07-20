'use client'
import React, { useState } from "react";
import Link from "next/link";
import { signIn } from 'next-auth/react';
import LearnUButton from "./LearnUButton";

export default function SignInUp() {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);

  const handleToggleForm = () => {
    setLoginFormVisible(!isLoginFormVisible);
  };

  const handleSignInWithProvider = async (provider) => {
    await signIn(provider, { callbackUrl: '@/app/api/auth/[...nextauth]/route.js' }); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center mx-2 md:mx-0">
      <div className="bg-white bg-opacity-50 backdrop-blur-xl p-8 rounded-2xl shadow-xl">
        {isLoginFormVisible ? (
          <form> 
            <h2 className="text-sky-500 font-semibold text-2xl pb-5">Login</h2>
            <input
              type="text"
              placeholder="Username"
              required
              className="w-full py-2 px-1 text-gray-400 mb-8 border-b border-gray-500 outline-none bg-transparent"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full py-2 px-1 text-gray-400 mb-8 border-b border-gray-500 outline-none bg-transparent"
            />
            <LearnUButton text="Sign In" onClick={() => handleSignInWithProvider('credentials')} />
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
            
            <LearnUButton text="Sign Up" onClick={() => handleSignInWithProvider('credentials')} />
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
