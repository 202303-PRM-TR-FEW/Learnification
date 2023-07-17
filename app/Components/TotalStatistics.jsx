import React from "react";
import Icons from "./Icons";

export default function TotalStatistics() {
  const totalStatistics = [
    { count: 3, label: 'FINISHED COURSES', icon: Icons.CheckIconProfile, bgColor: 'bg-blue-200' },
    { count: 56, label: 'HOURS LEARNED', icon: Icons.HourglassIcon, bgColor: 'bg-amber-200' },
    { count: 7, label: 'SKILLS ACHIEVED', icon: Icons.SkillsIcon, bgColor: 'bg-green-200' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:p-4 lg:p-4 gap-4 ml-8 mt-20 mr-6">
      {totalStatistics.map((statistic, index) => (
        <div key={index} className="w-full h-full p-1 bg-white rounded-3xl overflow-hidden shadow-md">
            <div className="mt-1 mb-3 ml-1 mr-1">
                <div className={`h-16 md:w-32 md:ml-1 rounded-2xl flex items-center justify-center ${statistic.bgColor}`}>
                    {statistic.icon && <statistic.icon />}
                </div>
                <div className="flex flex-col items-center justify-center mt-6 mb-1 font-semibold text-sm">
                    <h6 className="text-gray-600">{statistic.label}</h6>
                    <p className="mt-1">{statistic.count}</p>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
}
