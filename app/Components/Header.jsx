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
  const locale = useLocale();
  const path = usePathname();
  const { data } = useSession();
  if (path.includes("tr")) path.replace("/tr", ""); // it will replace the /tr with empty string so that we can use it in the Link component

  useEffect(() => {
    setActiveLang(locale === "en" ? "Türkçe" : "English");
    setActiveGreeting(locale === "en" ? "Selam!" : "Hello!")
  }, [locale]);

  const handleSwitchChange = () => {
    setActiveLang((prevLang) => (prevLang === "Türkçe" ? "English" : "Türkçe"));
  };


  return (
    <div className=" flex flex-wrap items-center justify-between mx-auto px-7 py-4">
      <div className="w-12 h-8 bg-blue-500 rounded-3xl flex justify-center items-center">
        <Link href="/">
          <Icons.BrandIcon />
        </Link>
      </div>
      <h1 className="text-blue-500 ">LearnU</h1>
      <div className="flex flex-col md:flex-row gap-3 items-center ">
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
        <div>
          {data ? (
            <button
              className="rounded-2xl lang-btn text-white bg-blue-500"
              onClick={() => signOut()}
            >
              Log Out
            </button>
          ) : (
            <button
              className="rounded-2xl lang-btn text-white bg-blue-500"
              onClick={() => signIn()}
            >
              Log In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
