import { useTranslations } from 'next-intl'
import React from 'react'

export default function LastYearComparison() {
    const t = useTranslations("Statistics");
    const infos = [
        {name:t("Study Time"), percentage: 12},
        {name:t("Hours Learned"), percentage: 7.2},
        {name:t("Finished Courses"), percentage: 25},
    ]
  return (
    <div className='w-full p-3'>
        <h1 className='font-medium text-2xl py-6'>{t("Last Year Comparison")}</h1>
        <div className='bg-white  p-6 rounded-2xl w-full flex flex-col divide-y'>
            {infos.map((key, index)=>(
                <div key={index} className='flex w-full flex-col lg:flex-row items-center justify-between gap-x-2 gap-y-6 py-6'>
                    <h6 className='lg:w-1/5'>{key.name}</h6>
                    <div className='bg-gray-400 w-10/12 rounded-full h-6 lg:h-4'>
                <div key={index} className='flex w-full flex-col lg:flex-row items-center justify-between gap-x-2 gap-y-6 py-6'>
                    <h6 className='lg:w-1/5'>{key.name}</h6>
                    <div className='bg-gray-400 w-10/12 rounded-full h-6 lg:h-4'>
                        <div className="bg-blue-400 w-1/2 h-full items-center  rounded-full flex justify-end" style={{width:`${key.percentage+20}%`}}>
                            <p className='bg-white h-[3.8em] w-[3.8em] lg:h-[3.1em] lg:w-[3.1em] p-4 lg:p-3 text-sm border-2 border-blue-400 rounded-full'>{key.percentage}</p>
                            <p className='bg-white h-[3.8em] w-[3.8em] lg:h-[3.1em] lg:w-[3.1em] p-4 lg:p-3 text-sm border-2 border-blue-400 rounded-full'>{key.percentage}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
