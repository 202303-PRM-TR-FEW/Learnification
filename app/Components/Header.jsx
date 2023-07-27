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
    <div className=" flex flex-wrap items-center justify-between mx-auto px-7 py-4">
      <div className="flex justify-start items-center gap-2">
        <div className="w-12 h-8 bg-blue-500 rounded-3xl flex justify-center items-center">
          <Link href="/">
            <Icons.BrandIcon />
          </Link>
        </div>
        <h1 className="text-blue-500 text-base">LearnU</h1>
      </div>

      <nav>
        <section className="flex lg:hidden">
          <div
            className="flex flex-col gap-2 "
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 bg-gray-600"></span>
            <span className="block h-0.5 w-8 bg-gray-600"></span>
            <span className="block h-0.5 w-8 bg-gray-600"></span>
          </div>

          <div className={`flex justify-between ${isNavOpen ? "showNav" : "hideNav"}`} > 
            <div
              className="absolute top-0 right-0 p-[1.2rem] bg-white-smoke"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex gap-2 p-4 bg-white-smoke">
              <li >
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
              <li >
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
              </li>
            </ul>
          </div>
        </section>

        <ul className="hidden lg:flex lg:gap-2">
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
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
