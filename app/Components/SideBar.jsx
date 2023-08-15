"use client";
import "../globals.css";
import React, { useState, useEffect } from "react";
import Link from "next-intl/link";
import Icons from "./Icons";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { usePathname } from "next-intl/client";
import { signIn, signOut, useSession } from "next-auth/react";

function SideBar() {
  const t = useTranslations("SideBar");
  const [activeLang, setActiveLang] = useState("Türkçe");
  const [activeGreeting, setActiveGreeting] = useState("Selam!");
  const locale = useLocale();
  const path = usePathname();
  const { data } = useSession();

  useEffect(() => {
    setActiveLang(locale === "en" ? "Türkçe" : "English");
    setActiveGreeting(locale === "en" ? "Selam!" : "Hello!");
  }, [locale]);

  const handleSwitchChange = () => {
    setActiveLang((prevLang) => (prevLang === "Türkçe" ? "English" : "Türkçe"));
  };

  if (path.includes("tr")) path.replace("/tr", ""); // it will replace the /tr with empty string so that we can use it in the Link component

  const [isLaptop, setIsLaptop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div>
        <div className="flex justify-center md:flex-col md:mt-[4em] md:w-20 md:mr-20">
          <nav className="fixed bottom-2 md:static z-40">
            <ul
              className={`flex justify-around md:justify-evenly w-[85vw] list-none ${
                isLaptop ? "bg-transparent" : "gradient-bg"
              } p-[1em] rounded-[40px] md:flex-col md:items-center md:h-[25em] md:w-[7em] z-40`}
            >
              <li className="hidden lg:flex lg:justify-start lg:pb-8">
                <div className="lg:flex lg:justify-center lg:items-center lg:w-12 lg:h-8 lg:bg-blue-500 lg:rounded-3xl">
                  <Icons.BrandIcon />
                </div>
              </li>
              <li>
                <Link
                  href="/home"
                  className="mainLinks no-underline text-[#b1b1b1]"
                >
                  <Icons.HomeIcon />
                  <span className="hidden lg:block lg:text-center lg:text-sm">
                    {t("Home")}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/search"
                  className="mainLinks no-underline text-[#b1b1b1]"
                >
                  <Icons.SearchIcon />
                  <span className="hidden lg:block lg:text-center lg:text-sm">
                    {t("Search")}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/my-learning"
                  className="mainLinks no-underline text-[#b1b1b1]"
                >
                  <Icons.CoursesIcon />
                  <span className="hidden lg:block lg:text-center lg:text-sm">
                    {t("Courses")}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/saved"
                  className="mainLinks no-underline text-[#b1b1b1]"
                >
                  <Icons.SavedIcon />
                  <span className="hidden lg:block lg:text-center lg:text-sm">
                    {t("Saved")}
                  </span>
                </Link>
              </li>
              {data && (
                <li>
                  <Link
                    href="/profile"
                    className="mainLinks no-underline text-[#b1b1b1]"
                  >
                    <Icons.ProfileIcon />
                    <span className="hidden lg:block lg:text-center lg:text-sm">
                      {t("Profile")}
                    </span>
                  </Link>
                </li>
              )}
              <li>
                <Link
                  href="/about"
                  className="mainLinks no-underline text-[#b1b1b1]"
                >
                  <Icons.AboutIcon />
                  <span className="hidden lg:block lg:text-center lg:text-sm">
                    {t("About")}
                  </span>
                </Link>
              </li>
              <li className="hidden lg:flex lg:flex-col lg:gap-4 lg:pt-4">
                <div>
                  <Link href={path} locale={locale === "en" ? "tr" : "en"}>
                    <button
                      className={`rounded-2xl lang-btn text-white ${
                        locale === "en" ? "bg-red-500" : "bg-blue-500"
                      }`}
                      onClick={handleSwitchChange}
                    >
                      <div className="primary text">{activeLang}</div>
                      <div className="secondary text">{activeGreeting}</div>
                    </button>
                  </Link>
                </div>
                <div>
                  {data ? (
                    <button
                      className="rounded-2xl lang-btn text-white bg-blue-500 border border-white hover:bg-white hover:text-blue-500 hover:border-blue-500 transition-colors duration-300"
                      onClick={() => signOut()}
                    >
                      Log Out
                    </button>
                  ) : (
                    <button
                      className="rounded-2xl lang-btn text-white bg-blue-500 border border-white hover:bg-white hover:text-blue-500 hover:border-blue-500 transition-colors duration-300"
                      onClick={() => signIn()}
                    >
                      Log In
                    </button>
                  )}
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default SideBar;
