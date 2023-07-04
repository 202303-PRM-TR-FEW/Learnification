import React from 'react'

export default function Layout({ children }) {
    return (
        <>
            <navbar>
                <a href="/">Home</a>
            </navbar>
            {children}
        </>
    )
}
