import React from "react";
import LearnUButton from "./LearnUButton";
import Icons from "./Icons";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";

const NoCoursesFound = () => {
  const t = useTranslations("NoCoursesFound");
  return (
    <main className="lg:h-screen lg:flex lg:items-center lg:justify-center lg:my-0 mt-8 mb-20">
      <div className="w-full p-6 shadow-light-gray rounded-[50px] grid lg:grid-cols-2">
        <Icons.NoCourseIcon className="w-full max-lg:max-w-[400px] 2xl:max-h-[600px] 2xl:max-w-[600px] aspect-square" />
        <div className="basis-full my-4 mx-4 text-center lg:text-left lg:pl-4">
          <h1 className="font-bold text-xl mt-8">
            <span className="text-3xl">{t("span")} </span>
            {t("title")}
          </h1>
          <p className="mt-8 pb-8 text-xl">{t("home description")}</p>
          <Link href="/home">
            {" "}
            <LearnUButton text={t("Home")} className="w-full" />
          </Link>
          <p className="mt-8 pb-8 text-xl">{t("search description")}</p>
          <Link href="/search">
            <LearnUButton text={t("Search")} className="w-full" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NoCoursesFound;
