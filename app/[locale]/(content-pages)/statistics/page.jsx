import LastYearComparison from '@/app/Components/StatisticsPage/LastYearComparison'
import MyActivity from '@/app/Components/StatisticsPage/MyActivity'
import React from 'react'
import MyPerformance from "../../../Components/MyPerformance";

export default function Statistics() {
    return (
        <div className='w-full'>
            <MyActivity />
            <LastYearComparison />
            <MyPerformance/>
        </div>
    )
}
