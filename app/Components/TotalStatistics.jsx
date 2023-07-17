import React from "react";
import Icons from "./Icons";
import { useTranslations } from "next-intl";


export default function TotalStatistics() {
  const t = useTranslations("Profile")

  const totalStatistics = [
    { count: 3, label: t('FINISHED COURSES'), icon: Icons.CheckIconProfile, bgColor: 'bg-light-blue' },
    { count: 56, label: t('HOURS LEARNED'), icon: Icons.HourglassIcon, bgColor: 'bg-light-orange' },
    { count: 7, label: t('SKILLS ACHIEVED'), icon: Icons.SkillsIcon, bgColor: 'bg-light-green' }
  ];

  return (
    <div>
      <h1 className="font-semibold ml-8 mt-16 mb-4 md:ml-12 md:mb-2 text-lg lg:text-2xl md:text-xl">{t("title")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:p-4 lg:p-4 gap-4 ml-8 mr-6">
      {totalStatistics.map((statistic, index) => (
        <div key={index} className="w-full h-full p-1 bg-white rounded-3xl overflow-hidden shadow-md">
            <div className="mt-1 mb-3 mr-1 ml-1">
                <div className={`h-20 md:w-42 lg:w-44 rounded-2xl flex items-center justify-center ${statistic.bgColor}`}>
                    {statistic.icon && <statistic.icon />}
                </div>
                <div className="flex flex-col items-center justify-center mt-6 mb-1 font-semibold text-sm">
                    <h6 className="text-gray-600">{statistic.label}</h6>
                    <p className="mt-1 text-base">{statistic.count}</p>
                </div>
            </div>
        </div>
      ))}
    </div>
    </div>
  );
}
