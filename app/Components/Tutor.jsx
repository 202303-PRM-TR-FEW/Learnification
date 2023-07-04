import Image from 'next/image'
import React from 'react'

export default function Tutor({ tutor }) {
    return (
        <>
            <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image src={tutor?.imageUrl} alt={tutor?.name} width={60} height={60} sizes='100vw' />
            </div>
            <div className="ml-2 pr-2">
                <p>
                    {tutor?.name}
                </p>
            </div>
        </>
    )
}
