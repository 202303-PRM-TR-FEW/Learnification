"use client";
import React, { useState, useEffect } from "react";
import LearnUButton from "../LearnUButton";
import { useTranslations } from "next-intl";
import SearchFormPartTwo from "@/app/Components/SearchPage/SearchFormPartTwo";

export default function SearchFormPartOne() {
  const t = useTranslations("Search");
  const [courses, setCourses] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  
  const fetchCourses = async () => {
    try {
      let filteredCourses;
      if (searchInput.trim() === "") {
        const response = await fetch("/api/all-courses");
        const data = await response.json();
        filteredCourses = data.courses;
      } else {
        const response = await fetch("/api/all-courses");
        const data = await response.json();
        filteredCourses = data.courses.filter((course) =>
          course.title.toLowerCase().includes(searchInput.toLowerCase())
        );
      }

      setCourses(filteredCourses);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
    if (event.target.value === "") {
      fetchCourses();
    }
  };

  const handleButtonClick = () => {
    fetchCourses();
  };
  const topSearches = [
    { id: 0, name: t("Top Searches.Marketing 101") },
    { id: 1, name: t("Top Searches.UI/UX Design") },
    { id: 2, name: t("Top Searches.Big Data 101") },
    { id: 3, name: t("Top Searches.Astronomy 101") },
    { id: 4, name: t("Top Searches.Sales 101") },
    { id: 5, name: t("Top Searches.Drawing 101") },
    { id: 6, name: t("Top Searches.Becoming a Photographer") },
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
            value={searchInput}
            onChange={handleInputChange}
          />
          <LearnUButton
            text={t("Search Input.button")}
            paddingInline={14}
            bgColor="blue"
            borderRadius={10}
            className="ml-4"
            onClick={handleButtonClick}
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
                className={`inline-block px-4 py-2 mb-2 rounded-full ${
                  selectedSearch === search.id
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
      <SearchFormPartTwo courses={courses} />
    </div>
  );
}
