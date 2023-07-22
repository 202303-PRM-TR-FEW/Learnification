import React from "react";

export default function ThisWeek(){

    const progressData = [
    { day: 'Mon', progress: 80 },
    { day: 'Tue', progress: 50 },
    { day: 'Wed', progress: 30 },
    { day: 'Thu', progress: 60 },
    { day: 'Fri', progress: 90 },
    { day: 'Sat', progress: 20 },
    { day: 'Sun', progress: 40 },
    ];

    return (
        <div className="bg-white rounded-3xl p-4 w-fit mt-12 ml-10">
        <div className="font-semibold ml-2">
        <h6 className="text-xs mb-1 text-gray-600">TIME SPENT</h6>
        <h1 className="text-lg mb-2">31.8 Hours</h1>
        </div>
        <div className="flex shrink w-full">
          {progressData.map((data, index) => (
            <div key={index} className="flex flex-col items-center mr-4">
              <div className="w-4 h-40 bg-white-smoke rounded-lg relative ml-8">
                <div
                  className="absolute bottom-0 left-0 right-0 bg-primary-blue rounded-lg"
                  style={{ height: `${data.progress}%` }}
                />
              </div>
              <div className="mb-2 ml-8">{data.day}</div>
            </div>
          ))}
        </div>
      </div>
    );
};