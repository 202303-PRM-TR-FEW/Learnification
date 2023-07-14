"use client"
import "../globals.css";
import Link from "next-intl/link";
import Icons from "./Icons";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname } from "next-intl/client";
import { signIn, signOut, useSession } from "next-auth/react";

function SideBar() {
  const { data } = useSession()
  const locale = useLocale();
  const path = usePathname();
  if (path.includes("tr")) path.replace("/tr", "") // it will replace the /tr with empty string so that we can use it in the Link component
  return (
    <>
      <div className="absolute top-6 right-6 z-50">
        <ul className="">
          <div>
            {locale === "en" ? (
              <Link href={path} locale="tr">
                <Image src="/turkey.png" width={40} height={40} sizes="100wh" alt="Turkey Flag" />
              </Link>
            ) : (
              <Link href={path} locale="en">
                <Image src="/united-states-of-america.png" width={40} height={40} sizes="100wh" alt="USA Flag" />
              </Link>
            )}
          </div>
        </ul>
      </div>
      <div className="fixed top-7 left-6 z-50">
        <Link href="/">
          <Icons.LogoIcon />
        </Link>
      </div>
      <div className="flex justify-center md:flex-col md:mt-[4em] md:w-20">
        <nav className="fixed bottom-2 md:top-14 z-40">
          <ul className="flex justify-around md:justify-evenly w-[85vw] list-none md:bg-transparent bg-black/75 backdrop-blur-xl p-[1em] rounded-[40px] md:flex-col md:items-center md:h-[25em] md:w-[7em] z-40">
            <li>
              <Link href="/home" className="mainLinks no-underline text-[#b1b1b1]">
                <Icons.HomeIcon t={useTranslations("SideBar")} />
              </Link>
            </li>
            <li>
              <Link href="/search" className="mainLinks no-underline text-[#b1b1b1]">
                <Icons.SearchIcon t={useTranslations("SideBar")} />
              </Link>
            </li>
            <li>
              <Link href="/courses/courseId" className="mainLinks no-underline text-[#b1b1b1]">
                <Icons.CoursesIcon t={useTranslations("SideBar")} />
              </Link>
            </li>
            <li>
              <Link href="/saved" className="mainLinks no-underline text-[#b1b1b1]">
                <Icons.SavedIcon t={useTranslations("SideBar")} />
              </Link>
            </li>
            <li>
              <Link href="/profile" className="mainLinks no-underline text-[#b1b1b1]">
                <Icons.ProfileIcon t={useTranslations("SideBar")} />
              </Link>
            </li>
            <li>
              {
                data ? (<p className="mainLinks no-underline text-[#b1b1b1]" onClick={() => signOut()}>
                  Log Out
                </p>) : (
                  <p className="mainLinks no-underline text-[#b1b1b1]" onClick={() => signIn()}>
                    Log In
                  </p>
                )
              }
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default SideBar;