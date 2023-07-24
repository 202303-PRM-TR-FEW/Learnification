import React from "react";
import Icons from "./../Icons";
import { useTranslations } from "next-intl";

export default function Achievements() {
  const t = useTranslations("Profile");

  const achievements = [
    { achievement: 'Commited Learner', icon: Icons.HourglassIcon, bgColor: 'bg-light-orange', counter: 2, goal: 3, description: "Reach a 3 days streak"},
    { achievement: 'Point Collector', icon: Icons.SkillsIcon, bgColor: 'bg-light-green', counter: 1200, goal: 3000, description: "Earn 1800 more points"}
  ];
  return (
    <div className="rounded-3xl p-4 mt-4">
        <h1 className="text-lg lg:text-2xl font-semibold mb-3">Achievements</h1>
      {achievements.map((achievement, index) => (
        <div key={index} className="rounded-3xl shadow-md p-2 mb-4 flex items-center">
          <div className={`h-28 w-32 rounded-2xl flex items-center justify-center ${achievement.bgColor}`}>
            {achievement.icon && <achievement.icon />}
          </div>
          <div className="ml-4 flex flex-col flex-grow gap-y-2">
            <div className="flex justify-between">
              <h1 className="text-md font-semibold mt-0 text-2xl">{achievement.achievement}</h1>
              <p className="hidden sm:block text-gray-400">{`${achievement.counter}/${achievement.goal}`}</p>
            </div>
            <div className="relative h-5 sm:h-3 bg-gray-200 rounded" key={index}>
              <div className={`absolute top-0 left-0 h-full rounded-full flex justify-end ${achievement.bgColor}`} style={{width:`${Math.round(achievement.counter*100/achievement.goal)}%`}}>
                <span className="sm:hidden text-gray-400 text-xs">{`${achievement.counter}/${achievement.goal}`}</span>
              </div>
            </div>
            <p className="text-gray-400">{achievement.description}</p>
          </div>
        </div>
      ))}   
    </div>
  );
}