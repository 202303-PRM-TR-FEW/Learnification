import React from 'react'
import SideBar from '../Components/SideBar'

export default function Layout({ children }) {
    return (
        <div className='bg-primary-gray min-h-screen sm:flex sm:items-start'>
            <SideBar />
            {children}
        </div>
    )
}
