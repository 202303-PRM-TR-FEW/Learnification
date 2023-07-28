import LastYearComparison from '@/app/Components/StatisticsPage/LastYearComparison'
import MyActivity from '@/app/Components/StatisticsPage/MyActivity'
import ThisWeek from '@/app/Components/StatisticsPage/ThisWeek'
import React from 'react'
import MyPerformance from "@/app/Components/StatisticsPage/MyPerformance";

export default function Statistics() {
    return (
        <div className='w-full flex flex-col lg:flex-row gap-y-10 pb-16'>
            <div className='w-full lg:w-1/2'>
                <ThisWeek />
                <MyPerformance />
            </div>
            <div className='w-full lg:w-1/2'>
                <MyActivity />
                <LastYearComparison />
            </div>
        </div>
    )
}
