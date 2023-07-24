import React from 'react';
import UserInfo from "../../../Components/ProfilePage/UserInfo";
import TotalStatistics from '@/app/Components/ProfilePage/TotalStatistics';
import FriendsComponent from '@/app/Components/ProfilePage/FriendsComponent'
import LearnUButton from '@/app/Components/LearnUButton'
import Achievements from '@/app/Components/ProfilePage/Achievements';

export default function Profile() {
    return (
        <div className='flex flex-col items-center lg:flex-row pt-16 w-full gap-y-2'>
            <div className="w-full lg:w-3/5 flex flex-col items-center mr-6">
                <UserInfo/>
                <div className='w-full'>
                    <TotalStatistics/>
                </div>
                <div className='w-full ml-10'>
                    <Achievements/>
                </div>
            </div>
            <div className='w-full mb-20 lg:w-2/5 md:max-w-none px-2 md:px-6 max-w-md'>
                <FriendsComponent myButton="addDelete"/>
                <FriendsComponent/>
                <div className="mt-12 flex flex-col sm:flex-row itms-center justify-center gap-4">
                    <LearnUButton text="FIND FRIENDS" bgColor="white"/>
                    <LearnUButton text="INVITE FRIENDS"/>
                </div>
            </div>
        </div>
    )
}
