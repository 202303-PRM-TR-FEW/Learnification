"use client";
import React, { useEffect, useState, useRef } from "react";
import CategoriesExpansion from "../CategoriesExpansion";
import CategoriesArray from "../CategoriesArray";
import Icons from "../Icons";
import { useTranslations } from "next-intl";
import MyLearning from "../MyLearning";
import { useSession } from "next-auth/react";

const MyLearningAndFilter = () => {
  const session = useSession()
  const t = useTranslations("Home");
  const categories = CategoriesArray();
  const [isPhoneVersion, setIsPhoneVersion] = useState(false);
  const [isTabletVersion, setIsTabletVersion] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const categoriesRef = useRef(null);
  const [myLearningCourses, setMyLearningCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const originalCourses = useRef([]);
  const [focusedCategoryIds, setFocusedCategoryIds] = useState([]);
  const [idCourses, setIdCourses] = useState([]);

  useEffect(() => {
    async function fetchMyLearningCourses() {
      try {
        const response = await fetch("/api/home/my-learning");
        if (response.ok) {
          const courses = await response.json();
          setMyLearningCourses(courses);
          setIdCourses(courses);
          originalCourses.current = courses;
        } else {
          console.error("Failed to fetch courses");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      } finally {
        setIsLoading(false);
      }
      await session.update()
    }

    fetchMyLearningCourses();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsPhoneVersion(width <= 768);
      setIsTabletVersion(width > 768 && width <= 1024);
    };

    window.addEventListener("resize", handleResize);

    const handleDocumentClick = (event) => {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target)
      ) {
        setSelectedCategoryId(null);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const phoneCategories = [
    ...categories.slice(0, 3),
    { id: 7, name: `${t("Categories.More")}`, icon: <Icons.AstronomyIcon /> },
  ];
  const tabletCategories = [
    ...categories.slice(0, 5),
    { id: 7, name: `${t("Categories.More")}`, icon: <Icons.AstronomyIcon /> },
  ];
  const extraPhoneCat = categories.slice(3);
  const extraTabletCat = categories.slice(5);

  const handleCategoryClick = (categoryId, categoryName) => {
    const translatedCategoryNames = {
      Satışlar: "Sales",
      Pazarlama: "Marketing",
      İK: "HR",
      Çizim: "Drawing",
      Tasarım: "Design",
      Astronomi: "Astronomy",
      "Büyük Veri": "Big Data",
      Sales: "Sales",
      Marketing: "Marketing",
      HR: "HR",
      Drawing: "Drawing",
      Design: "Design",
      Astronomy: "Astronomy",
      "Big Data": "Big Data",
    };

    const translatedCategoryName = translatedCategoryNames[categoryName];

    if (categoryId === 7) {
      setSelectedCategoryId(categoryId);
    } else if (selectedCategories.includes(translatedCategoryName)) {
      setSelectedCategories(
        selectedCategories.filter(
          (category) => category !== translatedCategoryName
        )
      );
    } else {
      setSelectedCategories([...selectedCategories, translatedCategoryName]);
    }
  };

  const handleFocus = (categoryId) => {
    const isAlreadyFocused = focusedCategoryIds.includes(categoryId);
    if (isAlreadyFocused) {
      setFocusedCategoryIds(
        focusedCategoryIds.filter((id) => id !== categoryId)
      );
    } else {
      setFocusedCategoryIds([...focusedCategoryIds, categoryId]);
    }
  };

  useEffect(() => {
    let filteredCourses = originalCourses.current;

    if (selectedCategories.length > 0) {
      filteredCourses = originalCourses.current.filter((course) =>
        selectedCategories.includes(course.category)
      );
    }

    setMyLearningCourses(filteredCourses);
  }, [selectedCategories]);

  return (
    <div>
      <h1 className="pt-10 pb-5 text-2xl font-bold">{t("Categories.title")}</h1>
      <div
        ref={categoriesRef}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 cursor-pointer"
      >
        {isPhoneVersion
          ? phoneCategories.map((category) => (
            <div
              key={category.id}
              className={`flex flex-col items-center px-1 py-2 rounded-xl shadow category-icon--container hover:bg-[#CBE1FA] hover:border-blue-500 border hover:text-[#2E8DFF] text-[#616161] bg-[#fbfbfb] ${focusedCategoryIds.includes(category.id) ? "focused" : ""
                }`}
              onClick={() => {
                handleCategoryClick(category.id, category.name);
                handleFocus(category.id, category.name);
              }}
            >
              <div>{category.icon}</div>
              <p className="text-sm font-bold">{category.name}</p>
            </div>
          ))
          : isTabletVersion
            ? tabletCategories.map((category) => (
              <div
                key={category.id}
                className={`flex flex-col items-center px-1 py-2 rounded-xl shadow category-icon--container hover:bg-[#CBE1FA] hover:border-blue-500 border hover:text-[#2E8DFF] text-[#616161] bg-[#fbfbfb] ${focusedCategoryIds.includes(category.id) ? "focused" : ""
                  }`}
                onClick={() => {
                  handleCategoryClick(category.id, category.name);
                  handleFocus(category.id, category.name);
                }}
              >
                <div>{category.icon}</div>
                <p className="text-sm font-bold">{category.name}</p>
              </div>
            ))
            : categories.map((category) => (
              <div
                key={category.id}
                className={`flex flex-col items-center px-1 py-2 rounded-xl shadow category-icon--container hover:bg-[#CBE1FA] hover:border-blue-500 border hover:text-[#2E8DFF] text-[#616161] bg-[#fbfbfb] ${focusedCategoryIds.includes(category.id) ? "focused" : ""
                  }`}
                onClick={() => {
                  handleCategoryClick(category.id, category.name);
                  handleFocus(category.id, category.name);
                }}
              >
                <div>{category.icon}</div>
                <p className="text-sm font-bold">{category.name}</p>
              </div>
            ))}
      </div>
      {selectedCategoryId === 7 && (
        <CategoriesExpansion
          categories={isPhoneVersion ? extraPhoneCat : extraTabletCat}
          handleCategoryClick={handleCategoryClick}
          handleFocus={handleFocus}
          focusedCategoryIds={focusedCategoryIds}
        />
      )}
      <MyLearning
        myLearningCourses={myLearningCourses}
        isLoading={isLoading}
        idCourses={idCourses}
      />
    </div>
  );
};

export default MyLearningAndFilter;
