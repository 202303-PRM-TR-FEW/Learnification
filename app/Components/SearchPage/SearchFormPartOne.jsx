"use client";
import React, { useState, useEffect, useRef } from "react";
import LearnUButton from "../LearnUButton";
import { useTranslations } from "next-intl";
import SearchFormPartTwo from "@/app/Components/SearchPage/SearchFormPartTwo";
import Link from "next/link";

export default function SearchFormPartOne() {
  const t = useTranslations("Search");
  const [courses, setCourses] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [originalCourses, setOriginalCourses] = useState([]);

  const filterCourses = (courses, searchInput) => {
    if (searchInput.trim() === "") {
      return courses;
    } else {
      return courses.filter((course) =>
        course.title.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await fetch("/api/all-courses");
      const data = await response.json();
      setOriginalCourses(data.courses);
      setCourses(data.courses);      
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    let filteredCourses;
    if (searchInput.trim() === "") {
      filteredCourses = originalCourses;
    } else {
      filteredCourses = originalCourses.filter((course) =>
        course.title.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    setCourses(filteredCourses);
  }, [searchInput, originalCourses]);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
    if (event.target.value === "") {
      fetchCourses();
    }
  };

  const topSearches = originalCourses.slice(0, 7).map((course) => ({
    id: course._id,
    name: course.title,
  }));

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
        </div>
        <hr className="h-px mt-10 bg-gray-200 border-0" />
        <div className="mt-4">
          <h2 className="mb-4 text-gray-500	font-bold text-sm">
            {t("Top Searches.title")}
          </h2>
          <div className="grid grid-cols-1 m-3 md:grid-cols-3 lg:grid-cols-7 gap-2">
            {topSearches.map((search) => (
              <Link key={search.id}  href={`course-detail/${search.id}`} className={`flex justify-center items-center text-center px-4 py-2 mb-2 rounded-full ${
                selectedSearch === search.id
                  ? "bg-blue-100 border border-blue-500 text-blue-500"
                  : "border border-lightgray text-gray-800"
              }`}
              onClick={() => handleSearchClick(search.id)}> 
              <button
                
              >
                {search.name}
              </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <SearchFormPartTwo courses={courses} />
    </div>
  );
}
