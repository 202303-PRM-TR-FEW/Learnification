"use client";
import React from "react";
import Icons from "@/app/Components/Icons";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import { CircularProgress } from "@mui/material";
import defaultPicture from "../../../public/default-profile-picture.webp"
import notify from "@/utils/notifications";
import 'react-toastify/dist/ReactToastify.css';
export default function UserInfo() {
  const { data, status, update } = useSession();
  const t = useTranslations("Profile")

  const handleFileInput = async (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    formData.append("email", data?.session.user.email);
    const response = await fetch("/api/upload-profile-picture", {
      method: "POST",
      body: formData,
    })
    if (response.ok) {
      const newUserData = await response.json()
      await update(newUserData)
      notify(t("ImageSuccessMessage"), "success")
      return
    }
    notify(t("ImageErrorMessage"), "error")
  };

  const statsData = [
    { count: 0, label: t("My courses") },
    { count: 2, label: t("My followers") },
    { count: 32, label: t("Following") },
  ];

  const StatsBox = ({ count, label }) => (
    <div className="text-center font-semibold md:text-md p-2 ">
      <h6 className="text-xl">{count}</h6>
      <h6 className="text-gray-600 text-sm">{label}</h6>
    </div>
  );

  if (status === 'loading') return <div>
    <CircularProgress />
  </div>
  const user = data?.session.user
  console.log(user)
  return (
    <div className="w-full">
      <div className="flex flex-col xl:flex-row items-center justify-center w-full">
        <div className="h-[9em] w-[10em] md:w-[14em] md:h-[13em] xl:w-[18em] xl:h-[12em] pr-2">
          {
            user?.image ? <Image
              src={user?.image}
              alt={"user profile picture"}
              width={80}
              height={80}
              sizes="25vw"
              quality={100}
              className="rounded-full w-full h-full"
            /> : (
              <Image
                className="rounded-full w-full h-full"
                src={defaultPicture}
                alt={"default user profile picture"}
                width={80}
                height={80}
                sizes="25vw"
                quality={100}
              />
            )
          }
          <label
            htmlFor="fileUpload"
            className="bg-green-300 rounded-full px-2 text-white relative bottom-8 left-28 cursor-pointer text-3xl"
          >
            +
          </label>
          <input
            id="fileUpload"
            className="hidden"
            type="file"
            onChange={handleFileInput}
          />
        </div>
        <div className="w-full h-1/3 mt-4">
          <div className="lg:col-span-2 md:col-span-2">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold  text-center md:text-start">
              {
                user?.name
              }
            </h1>
            <div className="flex justify-center md:justify-start font-semibold md:ml-0 lg:ml-0 lg:mt-1 pr-8">
              <Icons.LocationIcon />
              <h6 className="lg:ml-2">
                {
                  user?.location
                }
              </h6>
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <div className="w-full md:max-w-none lg:min-w-[28em] lg:row-span-2 lg:col-span-2 md:row-span-2 md:col-span-2 md:mt-2 rounded-3xl bg-gray-100 border-white border-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-4 md:py-2">
              {statsData.map((data, index) => (
                <StatsBox key={index} count={data.count} label={data.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
