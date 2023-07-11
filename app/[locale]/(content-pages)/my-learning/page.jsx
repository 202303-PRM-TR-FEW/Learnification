import Link from 'next/link'
import React from 'react'
import Icons from '../../../Components/Icons.jsx'
import { useTranslations } from 'next-intl'
export default function MyLearning() {
    const t = useTranslations('MyLearning')
    return (
        <main className='w-full'>
            <div className='flex justify-between w-1/2'>
                <h1>
                    {t('title')}
                </h1>
                <Link href='/statistics'>
                    <p className='flex gap-2 lg:gap-6'>
                        <span>
                            <Icons.StatisticsIcon />
                        </span>
                        <span>
                            {t('statistics')}
                        </span>
                    </p>
                </Link>
                {/* <MyLearningCard /> */}
            </div>
            <div></div>
        </main>
    )
}
