import React from "react";
import MyLearningAndFilter from "../../../Components/HomePage/MyLearningAndFilter";
import FeaturedCourses from "../../../Components/HomePage/FeaturedCourses";
import MyLearning from "../../../Components/MyLearning";
import { getServerSession } from "next-auth";
import LearnUButton from "@/app/Components/LearnUButton";
import Link from "next/link";
import { useLocale } from "next-intl";

export default async function Home() {
  const locale = useLocale();
  const session = await getServerSession(); // we get the session data on the server side like this
  return (
    <>
      <div className="basis-full mt-2 px-6 sm:px-12 pb-20 bg-neutral-100 md:pr-[50px] lg:pr-[100px]">
        <FeaturedCourses />

        {!session ? (
          <div className="flex">
            <Link className="mt-2 m-auto" href={"sign-in?callback=home"}>
              <LearnUButton
                text={
                  locale === "en"
                    ? "SIGN IN TO SEE YOUR COURSES"
                    : "KURSLARINIZI GÖRMEK İÇİN GİRİŞ YAPINIZ"
                }
              />
            </Link>
          </div>
        ) : (
          <MyLearningAndFilter />
        )}
      </div>
    </>
  );
}
