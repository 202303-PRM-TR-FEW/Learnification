"use client"
import React from 'react'
import { useState } from 'react';
import Icons from '../Components/Icons'
export default function Bookmark({ course }) {

    // todo: adding and removing saved course functionality
    const [marked, setMarked] = useState(false)
    return (
        <div className='bg-[#edf3fb] p-2 rounded-lg ' onClick={() => {
            setMarked(prev => !prev)
        }}>
            <svg className={`w-4 h-4 overflow-visible opacity-100 z-1 cursor-pointer ${marked ? 'fill-primary-blue' : 'fill-[#b1b1b1]'}`} viewBox="0 0 384 512">
                <path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"></path>
            </svg>
        </div>
    )
}
