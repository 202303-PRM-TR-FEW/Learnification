import React from "react";
import Icons from "../Icons";
import { useTranslations } from "next-intl";

export default function TotalStatistics() {
  const t = useTranslations("Profile");

  const totalStatistics = [
    {
      count: 3,
      label: t("FINISHED COURSES"),
      icon: Icons.CheckIconProfile,
      bgColor: "bg-light-blue",
    },
    {
      count: 56,
      label: t("HOURS LEARNED"),
      icon: Icons.HourglassIcon,
      bgColor: "bg-light-orange",
    },
    {
      count: 7,
      label: t("SKILLS ACHIEVED"),
      icon: Icons.SkillsIcon,
      bgColor: "bg-light-green",
    },
  ];

  return (
    <div className="w-full px-10 flex flex-col justify-center items-center">
      <div className=" w-full max-w-md md:max-w-none lg:min-w-[28em]">
        <h1 className="text-2xl font-semibold my-4 self-start">
          {t("title")}
        </h1>
        <div className="flex flex-row gap-x-2">
          {totalStatistics.map((statistic, index) => (
            <div
              key={index}
              className="w-full h-full p-1 bg-white rounded-3xl overflow-hidden shadow-md"
            >
              <div className="mt-1 mb-3">
                <div
                  className={`h-24 rounded-2xl flex items-center justify-center ${statistic.bgColor}`}
                >
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
    </div>
  );
}
