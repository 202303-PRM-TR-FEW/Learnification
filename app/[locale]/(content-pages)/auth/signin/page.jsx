'use client'
import LearnUButton from '@/app/Components/LearnUButton'
import { signIn } from 'next-auth/react'
import React from 'react'

export default function SignIn() {
    return (
        <div>
            <h1>Sign in</h1>
            <div onClick={() => signIn('google')}>
                <LearnUButton text='Sign in with google' />
            </div>
            <div onClick={() => signIn('twitter')}>
                <LearnUButton text='Sign in with Twitter' />
            </div>
        </div>
    )
}
