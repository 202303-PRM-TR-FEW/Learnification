import React from "react";
import Icons from "./Icons";
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
      <h1 className="font-semibold ml-8 mt-16 mb-4 md:ml-12 md:mb-2 text-lg lg:text-2xl md:text-xl">{t("title")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:p-4 lg:p-4 gap-4 ml-8 mr-6">
        {myPerformance.map((performance, index) => (
          <div key={index} className="w-full h-full p-1 bg-white rounded-3xl overflow-hidden shadow-md">
            <div className="mt-1 mb-3 mr-1 ml-1">
              <div className={`h-20 md:w-36 lg:w-44 rounded-2xl flex items-center justify-center ${performance.bgColor}`}>
                {performance.icon && <performance.icon />}
              </div>
              <div className="flex flex-col items-center justify-center mt-6 mb-1 font-semibold text-sm">
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
