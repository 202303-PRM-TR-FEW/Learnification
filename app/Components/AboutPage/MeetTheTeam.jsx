import React from "react";
import TeamArray from "../TeamArray";
import Image from "next/image";
import Icons from "../Icons";

const MeetTheTeam = () => {
  const members = TeamArray();
  return (
    <div className="mt-8 mb-20 md:mb-8 ">
      <ul className="flex flex-wrap justify-center gap-16 gradient-bg rounded-[50px] ">
        {members.map((member) => (
          <li
            key={member.id}
            className="profile-card relative w-56 h-56 bg-white p-8 rounded-full m-5  "
          >
            <div className="relative w-full h-full">
              <Image
                src={member.image}
                className="profile-image object-fill w-full rounded-full z-[99] "
                alt="Team member's images"
              />
            </div>
            <div className="caption text-center opacity-0">
              <h3 className="font-bold text-blue-500 mb-2">
                {member.name}
              </h3>
              <p className="mb-2">{member.title}</p>
              <div className="flex justify-center align-baseline gap-2">
                <a href={member.links.github}>
                  <Icons.GithubIcon />
                </a>
                <a href={member.links.linkedin}>
                  <Icons.LinkedinIcon />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetTheTeam;
