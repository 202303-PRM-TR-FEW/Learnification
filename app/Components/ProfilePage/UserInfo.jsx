import React from "react";
import Icons from "../Icons";

export default function UserInfo() {
    const statsData = [
        { count: 0, label: 'MY COURSES' },
        { count: 2, label: 'MY FOLLOWERS' },
        { count: 32, label: 'FOLLOWING' },
    ];

    const StatsBox = ({ count, label }) => (
        <div className="text-center font-semibold md:text-md p-2 ">
          <h6 className="text-xl">{count}</h6>
          <h6 className="text-gray-600 text-sm">{label}</h6>
        </div>
    );

    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row items-center justify-center w-full">
                <div className="h-32 w-32 md:h-36 md:w-48 lg:h-40 lg:w-48 bg-center bg-cover rounded-full md:mr-4" style={{backgroundImage:'url(https://assets.api.uizard.io/api/cdn/stream/ecfce0e0-bae1-4e4b-9187-d14a85958155.jpg)'}}></div>
                <div className="px-4 py-4 w-full h-1/3">
                    <div className="lg:col-span-2 md:col-span-2">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold  text-center md:text-start">Sally Robins</h1>
                        <div className="flex justify-center md:justify-start font-semibold md:ml-0 lg:ml-0 lg:mt-1 pr-8">
                            <Icons.LocationIcon/>
                            <h6 className="lg:ml-2">NEW YORK</h6>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <div className="w-full max-w-md md:max-w-none lg:w-[28em] lg:row-span-2 lg:col-span-2 md:row-span-2 md:col-span-2 md:mt-2 rounded-3xl bg-gray-100 border-white border-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-4 md:py-2">
                                {statsData.map((data, index) => (
                                    <StatsBox key={index} count={data.count} label={data.label} />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
