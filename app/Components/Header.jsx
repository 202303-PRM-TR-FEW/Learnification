"use client";
import "../globals.css";
import React, { useState, useEffect } from "react";
import Link from "next-intl/link";
import { useLocale } from "next-intl";
import { usePathname } from "next-intl/client";
import { signIn, signOut, useSession } from "next-auth/react";

import Icons from "./Icons";

const Header = () => {
  const [activeLang, setActiveLang] = useState("Türkçe");
  const [activeGreeting, setActiveGreeting] = useState("Selam!");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const locale = useLocale();
  const path = usePathname();
  const { data } = useSession();
  if (path.includes("tr")) path.replace("/tr", ""); // it will replace the /tr with empty string so that we can use it in the Link component

  useEffect(() => {
    setActiveLang(locale === "en" ? "Türkçe" : "English");
    setActiveGreeting(locale === "en" ? "Selam!" : "Hello!");
  }, [locale]);

  const handleSwitchChange = () => {
    setActiveLang((prevLang) => (prevLang === "Türkçe" ? "English" : "Türkçe"));
  };

  return (
    <main className="flex flex-wrap justify-between mx-auto px-7 py-4">
      <section>
        {isNavOpen ? (
          <ul className="flex justify-start items-center gap-2">
            <li>
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
            </li>
            <li>
              {data ? (
                <button
                  className="rounded-2xl lang-btn text-white bg-blue-500 border border-white hover:bg-white hover:text-blue-500 hover:border-blue-500"
                  onClick={() => signOut()}
                >
                  Log Out
                </button>
              ) : (
                <button
                  className="rounded-2xl lang-btn text-white bg-blue-500 border border-white hover:bg-white hover:text-blue-500 hover:border-blue-500"
                  onClick={() => signIn()}
                >
                  Log In
                </button>
              )}
            </li>
          </ul>
        ) : (
          <div className="flex justify-start items-center gap-2">
            <div className="w-12 h-8 bg-blue-500 rounded-3xl flex justify-center items-center">
              <Link href="/">
                <Icons.BrandIcon />
              </Link>
            </div>
            <h1 className="text-blue-500 text-base">LearnU</h1>
          </div>
        )}
      </section>

      <section>
        <div
          id="nav-icon"
          className={`w-8 relative cursor-pointer ${isNavOpen ? "open" : ""}`}
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className=" absolute h-1 w-full bg-gray-400 opacity-100 "></span>
          <span className=" absolute h-1  w-full bg-gray-400 opacity-100 "></span>
          <span className=" absolute h-1  w-full bg-gray-400 opacity-100 "></span>
        </div>
      </section>
    </main>
  );
};

export default Header;
