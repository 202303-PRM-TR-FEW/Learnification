import React from 'react'
import SideBar from '../Components/SideBar'

export default function Layout({ children }) {
    return (
        <>
            <SideBar />
            {children}
        </>
    )
}
