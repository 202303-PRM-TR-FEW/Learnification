import React from "react";
import Icons from "../Icons";
import { useTranslations } from "next-intl";

export default function MyPerformance() {
  const t = useTranslations("Statistics");

  const myPerformance = [
    { count: 31.8, label: t("Time Spent"), icon: Icons.BookIcon, bgColor: "bg-light-blue" },
    { count: 4.6, label: t("Average/Day"), icon: Icons.HourglassIcon, bgColor: "bg-light-orange" },
    { count: 12, label: t("Finished Courses"), icon: Icons.DoubleTickIcon, bgColor: "bg-light-green" },
  ];

  return (
    <div>
      <h1 className="font-semibold ml-2 pb-4 text-2xl">{t("Title")}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4">
        {myPerformance.map((performance, index) => (
          <div key={index} className="w-full p-1 bg-white rounded-3xl overflow-hidden shadow-md">
            <div className="mt-1 mb-3 mr-1 ml-1">
              <div className={`h-20 w-full rounded-2xl flex items-center justify-center ${performance.bgColor}`}>
                {performance.icon && <performance.icon />}
              </div>
              <div className="flex flex-col items-center justify-center mt-6 mb-1 font-semibold text-sm text-center">
                <h6 className="text-gray-600">{performance.label}</h6>
                <p className="mt-1 text-base">{performance.count}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
