import React from 'react'
import SideBar from '../../Components/SideBar'

export default function Layout({ children }) {
    return (
        <div className='bg-white-smoke min-h-screen md:flex md:items-start
            md:pr-[50px] lg:pr-[100px]'> {/* these paddings are experimental values, do not worry about them */}
            <SideBar />
            {children}
        </div>
    )
}
