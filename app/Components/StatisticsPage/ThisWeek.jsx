import React from "react";
import Icons from ".././Icons";
import { useTranslations } from "next-intl";

export default function ThisWeek() {
  const t = useTranslations("Statistics");

  const progressData = [
    { day: t("Weekdays.Monday"), progress: 80 },
    { day: t("Weekdays.Tuesday"), progress: 50 },
    { day: t("Weekdays.Wednesday"), progress: 30 },
    { day: t("Weekdays.Thursday"), progress: 60 },
    { day: t("Weekdays.Friday"), progress: 90 },
    { day: t("Weekdays.Saturday"), progress: 20 },
    { day: t("Weekdays.Sunday"), progress: 40 },
  ];

  const thisWeek = [
    {
      count: "2/3",
      label: t("Goal"),
      icon: Icons.AtIcon,
      bgColor: "bg-light-blue",
      textColor: "text-primary-blue",
    },
    {
      count: `103 ${t("Days")}`,
      label: t("Streak"),
      icon: Icons.StarIconStatistics,
      bgColor: "bg-light-green",
      textColor: "text-primary-green",
    },
  ];

  return (
    <div className="mt-20 ml-4 mr-4 lg:mt-10">
      <h1 className="mb-6 font-semibold text-xl md:text-2xl lg:text-3xl">
        {t("This Week")}
      </h1>
      <div className="bg-white rounded-3xl p-4 w-full">
        <div className="font-semibold ml-2">
          <h6 className="text-xs mb-1 text-gray-600">{t("Time Spent")}</h6>
          <h1 className="text-lg mb-2">31.8 {t("Hours")}</h1>
        </div>
        <div className="flex flex-wrap w-full max-md:gap-4 max-md:justify-around max-md:p-4">
          {progressData.map((data, index) => (
            <>
              <div
                key={index}
                className="flex flex-col items-center mb-4 lg:mr-4 lg:ml-4 max-md:hidden"
              >
                <div className="w-4 h-40 bg-white-smoke rounded-lg relative ml-6 lg:ml-8">
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-primary-blue rounded-lg"
                    style={{ height: `${data.progress}%` }}
                  />
                </div>
                <div className="mt-2 ml-6 lg:ml-6">{data.day}</div>
              </div>
              <div className="md:hidden">
                <div
                  className="w-32 h-32 rounded-full drop-shadow-xl"
                  style={{
                    background: `conic-gradient(#0ea5e9 ${
                      (360 * data.progress) / 100
                    }deg, #fff 0deg)`,
                  }}
                >
                  <div className=" w-28 h-28 rounded-full relative top-2 left-2 bg-white drop-shadow-xl">
                    {
                      <p className="relative top-11 left-10 text-xl font-semibold">
                        {data.progress}%
                      </p>
                    }
                  </div>
                </div>
                <div className="text-center text-lg font-semibold py-4">{data.day}</div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="mb-20 mt-10 md:mt-1 md:-ml-6">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:p-4 lg:p-4 gap-4">
            {thisWeek.map((data, index) => (
              <div
                key={index}
                className="w-full h-full p-1 bg-white rounded-3xl overflow-hidden shadow-md lg:ml-2 xl:ml-1"
              >
                <div className="flex items-center justify-center">
                  <div className="mr-2">{data.icon && <data.icon />}</div>
                  <h6 className="text-gray-600">{data.label}</h6>
                </div>
                <div className="p-2 w-full">
                  <div
                    className={`h-20 w-full rounded-2xl flex items-center justify-center ${data.bgColor}`}
                  >
                    <p
                      className={`mt-1 text-base font-semibold  ${data.textColor}`}
                    >
                      {data.count}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
