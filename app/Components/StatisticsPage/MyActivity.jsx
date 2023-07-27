"use client";
import React, { useState } from "react";
import Image from "next/image";
import uxessentials from "@/public/uxessentials.jpeg";

const activities = [
  { day: "MONDAY", classes: [{ image: uxessentials, name: "UX Essentials", tutor: "Don Drapper" }, { image: uxessentials, name: "UX Essentials", tutor: "Don Drapper" }] },
  { day: "THURSDAY", classes: [{ image: uxessentials, name: "UX Essentials", tutor: "Don Drapper" }, { image: uxessentials, name: "UX Essentials", tutor: "Don Drapper" }] },
  { day: "10 DAYS AGO", classes: [
      { image: uxessentials, name: "UX Essentials", tutor: "Don Drapper" }, { image: uxessentials, name: "UX Essentials", tutor: "Don Drapper" },
      { image: uxessentials, name: "UX Essentials", tutor: "Don Drapper" }, { image: uxessentials, name: "UX Essentials", tutor: "Don Drapper" },
      { image: uxessentials, name: "UX Essentials", tutor: "Don Drapper" }, { image: uxessentials, name: "UX Essentials", tutor: "Don Drapper" },
    ]
  },
];

export default function MyActivity() {
  const [showAll, setShowAll] = useState(false);
  const visibleActivities = showAll ? activities : activities.slice(0, 2);
  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };
  return (
    <div className="font-medium mb-2 px-2">
      <h1 className="text-2xl mb-6">My Activity</h1>
      <div className="grid grid-cols-1 divide-y bg-white py-1 px-6 rounded-3xl w-full sm:w-full">
        {visibleActivities.map((activity, index) => (
          <div
            key={index}
            className="flex flex-col w-full min-[400px]:justify-between py-2 gap-y-4"
          >
            <h6 className="text-sm text-gray-500">{activity.day}</h6>
            {activity.classes.map((classData, innerIndex) => (
              <div className="flex items-center" key={innerIndex}>
                <div className="rounded-xl overflow-hidden w-fit h-14 mr-8">
                  <Image
                    src={classData.image}
                    width={60}
                    height={60}
                    sizes="100vw"
                    alt="Lesson Pic"
                  />
                </div>
                <div>
                <h3>{classData.name}</h3>
                <p className="font-light text-sm text-gray-500">{classData.tutor}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
        <button
          className="py-3 w-full text-start max-[399px]:text-center text-sky-500"
          onClick={toggleShowAll}
        >
          {showAll ? "VIEW LESS ACTIVITY" : "VIEW ALL ACTIVITY"}
        </button>
      </div>
    </div>
  );
}
