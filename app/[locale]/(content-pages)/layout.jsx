'use client'
import React from 'react'
import SideBar from '../../Components/SideBar'
import LearnUButton from '@/app/Components/LearnUButton'
import { signIn, signOut, useSession } from 'next-auth/react'
export default function Layout({ children }) {
    const { data } = useSession()
    return (
        <div className='bg-white-smoke min-h-screen md:flex md:items-start
            md:pr-[50px] lg:pr-[100px]'> {/* these paddings are experimental values, do not worry about them */}
            <SideBar />
            {
                data ? <div onClick={() => signIn()}>
                    <LearnUButton text='Sign in' />
                </div> : <div onClick={() => signOut()}>
                    <LearnUButton text='Sign out' />
                </div>
            }
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
            {children}
        </div>
    )
}
