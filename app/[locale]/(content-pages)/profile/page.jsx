import React from 'react';
import UserInfo from "../../../Components/ProfilePage/UserInfo";
import TotalStatistics from '@/app/Components/TotalStatistics';
import FriendsComponent from '@/app/Components/ProfilePage/FriendsComponent'
import LearnUButton from '@/app/Components/LearnUButton'

export default function Profile() {
    return (
        <div>
            <div className="md:mt-6 w-full">
                <div className="w-full mt-6 md:mt-0">
                   <UserInfo/>
                </div>
            </div>
            <TotalStatistics/>
            <FriendsComponent myButton="addDelete"/>
            <FriendsComponent/>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <LearnUButton text="FIND FRIENDS" bgColor="white"/>
                <LearnUButton text="INVITE FRIENDS"/>
            </div>
        </div>
    )
}
