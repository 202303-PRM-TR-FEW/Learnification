'use client';
import React, { useState } from "react";
import LearnUButton from "../LearnUButton";
import { useTranslations } from "next-intl";

export default function SearchFormPartOne() {
  const t = useTranslations("Search")

  const topSearches = [
    { id: 0, name: t("Top Searches.Marketing Strategy") },
    { id: 1, name: t("Top Searches.UX Design") },
    { id: 2, name: t("Top Searches.Excel") },
    { id: 3, name: t("Top Searches.Adobe Photoshop") },
    { id: 4, name: t("Top Searches.CRM") },
    { id: 5, name: t("Top Searches.Photography") },
    { id: 6, name: t("Top Searches.Content Making") },
  ];

  const [selectedSearch, setSelectedSearch] = useState(null);
  const handleSearchClick = (id) => {
    if (selectedSearch === id) {
      setSelectedSearch(null);
    } else {
      setSelectedSearch(id);
    }
  };


  return (
    <div>
      <div className="mt-5 mb-4 ml-3 mr-3 lg:mt-8">
        <h1 className="font-bold md:text-xl lg:text-3xl mb-10">
          {t("Search Input.title")}
        </h1>
        <div className="flex mt-2 lg:w-8/12">
          <input
            type="text"
            placeholder={t("Search Input.placeholder")}
            className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none w-full"
          />
          <LearnUButton
            text={t("Search Input.button")}
            paddingInline={14}
            bgColor="blue"
            borderRadius={10}
            className="ml-4"
          />
        </div>
        <hr className="h-px mt-10 bg-gray-200 border-0" />
        <div className="mt-4">
          <h2 className="mb-4 text-gray-500	font-bold text-sm">
            {t("Top Searches.title")}
          </h2>
          <div className="grid grid-cols-1 m-3 md:grid-cols-3 lg:grid-cols-7 gap-2">
            {topSearches.map((search) => (
              <button
                key={search.id}
                className={`inline-block px-4 py-2 mb-2 rounded-full ${selectedSearch === search.id
                  ? "bg-blue-100 border border-blue-500 text-blue-500"
                  : "border border-lightgray text-gray-800"
                  }`}
                onClick={() => handleSearchClick(search.id)}
              >
                {search.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
