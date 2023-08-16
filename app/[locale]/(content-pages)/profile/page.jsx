import React from "react";
import UserInfo from "../../../Components/ProfilePage/UserInfo";
import TotalStatistics from "@/app/Components/ProfilePage/TotalStatistics";
import FriendsComponent from "@/app/Components/ProfilePage/FriendsComponent";
import LearnUButton from "@/app/Components/LearnUButton";
import Achievements from "@/app/Components/ProfilePage/Achievements";
import { useTranslations } from "next-intl";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

function FriendsPart() {
  const t = useTranslations("Profile");
  return (
    <div className="w-full mb-20 max-md:px-4 lg:w-2/5 max-sm:px-4 lg:max-w-md lg:ml-4">
      <div>
        <FriendsComponent
          myButton="addDelete"
          header={t("Friend Suggestions")}
        />
        <FriendsComponent header={t("Friends")} />
        <div className="mt-8 flex flex-col sm:flex-row itms-center justify-center gap-4">
          <LearnUButton text={t("FIND FRIENDS")} bgColor="white" />
          <LearnUButton text={t("INVITE FRIENDS")} />
        </div>
      </div>
    </div>
  );
}

export default async function Profile() {
  const data = await getServerSession();
  if (!data) {
    redirect("/sign-in?callbackUrl=/profile");
  }
  return (
    <div className="flex flex-col items-center lg:items-start lg:flex-row pt-16 w-full gap-4 lg:ml-10">
      <div className="w-full lg:w-3/5 flex flex-col items-center max-md:px-4 lg:mr-6 gap-4">
        <UserInfo />
        <div className="w-full">
          <TotalStatistics />
        </div>
        <div className="w-full">
          <Achievements />
        </div>
      </div>
      <FriendsPart />
    </div>
  );
}
