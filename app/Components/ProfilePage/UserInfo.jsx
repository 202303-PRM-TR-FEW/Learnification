import React from "react";
import Icons from "../Icons";

export default function UserInfo() {
    const statsData = [
        { count: 0, label: 'MY COURSES' },
        { count: 2, label: 'MY FOLLOWERS' },
        { count: 32, label: 'FOLLOWING' },
    ];

    const StatsBox = ({ count, label }) => (
        <div className="text-center font-semibold text-sm">
          <p>{count}</p>
          <h6 className="text-gray-600">{label}</h6>
        </div>
    );

    return (
        <div className="m-8">
            <div className="flex flex-col items-center justify-center">
                <div className="lg:flex lg:justify-center">
                    <div className="w-32 h-32 lg:h-40 lg:w-40 rounded-full bg-center bg-cover border-0" style={{backgroundImage:'url(https://assets.api.uizard.io/api/cdn/stream/ecfce0e0-bae1-4e4b-9187-d14a85958155.jpg)'}}></div>
                        <div className="mt-4 mb-3 lg:ml-8 lg:mt-1">
                            <h1 className="text-2xl lg:text-3xl font-semibold">Sally Robins</h1>
                            <div className="flex items-center font-semibold ml-4 lg:ml-0">
                                <Icons.LocationIcon/>
                                <h6 className="lg:ml-2">NEW YORK</h6>
                            </div>
                        </div>
                </div>
            </div>
            <div className="w-full h-full p-4 rounded-3xl bg-gray-100 border-white border-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {statsData.map((data, index) => (
                    <StatsBox key={index} count={data.count} label={data.label} />
                ))}
            </div>
        </div>
    );
}
