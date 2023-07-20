import LastYearComparison from '@/app/Components/StatisticsPage/LastYearComparison'
import MyActivity from '@/app/Components/StatisticsPage/MyActivity'
import React from 'react'

export default function Statistics() {
    return (
        <div className='w-full'>
            <MyActivity />
            <LastYearComparison />
        </div>
    )
}
