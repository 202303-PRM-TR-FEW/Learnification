import React from 'react'

export default function ThisWeek() {
  return (
    <div>
        <h1>This Week</h1>
        <div className='w-full bg-white p-8 rounded-2xl'>
            <div>
                <p>Time Spent</p>
                <h2>31.8 Hours</h2>
            </div>
            <div className='w-full bg-red-200 flex h-96 justify-around items-end'>
                <p>Monday</p><div className='h-10/12 bg-gray-500 w-5'><div className=''></div></div>
                <p>Tuesday</p><div className=''><div className=''></div></div>
                <p>Wednesday</p><div className=''><div className=''></div></div>
                <p>Thursday</p><div className=''><div className=''></div></div>
                <p>Friday</p><div className=''><div className=''></div></div>
                <p>Saturday</p><div className=''><div className=''></div></div>
                <p>Sunday</p><div className=''><div className=''></div></div>
            </div>
        </div>
    </div>
  )
}
