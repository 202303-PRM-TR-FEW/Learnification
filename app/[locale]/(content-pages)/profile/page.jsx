import React from 'react';
import UserInfo from "../../../Components/ProfilePage/UserInfo";
import TotalStatistics from '@/app/Components/ProfilePage/TotalStatistics';
import FriendsComponent from '@/app/Components/ProfilePage/FriendsComponent'
import LearnUButton from '@/app/Components/LearnUButton'
import Achievements from '@/app/Components/ProfilePage/Achievements';

export default function Profile() {
    return (
        <div className='flex flex-col items-center lg:flex-row pt-16 w-full gap-4 lg:ml-10'>
            <div className="w-full lg:w-3/5 flex flex-col items-center max-md:px-4 lg:mr-6 gap-4">
                <UserInfo />
                <div className='w-full'>
                    <TotalStatistics />
                </div>
                <div className='w-full'>
                    <Achievements />
                </div>
            </div>
            <div className='w-full mb-20 max-md:px-4 lg:w-2/5 max-sm:px-4 lg:max-w-md lg:ml-4'>
                <FriendsComponent myButton="addDelete" />
                <FriendsComponent />
                <div className="mt-8 flex flex-col sm:flex-row itms-center justify-center gap-4">
                    <LearnUButton text="FIND FRIENDS" bgColor="white" />
                    <LearnUButton text="INVITE FRIENDS" />
                </div>
            </div>
        </div>
    )
}
