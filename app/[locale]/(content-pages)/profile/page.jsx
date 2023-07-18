import FriendsComponent from '@/app/Components/ProfilePage/FriendsComponent'
import LearnUButton from '@/app/Components/LearnUButton'
import React from 'react'

export default function Profile() {
    return (
        <div className="pt-6 mx-4">
            <FriendsComponent myButton="addDelete"/>
            <FriendsComponent/>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <LearnUButton text="FIND FRIENDS" bgColor="white"/>
                <LearnUButton text="INVITE FRIENDS"/>
            </div>
        </div>
    )
}
