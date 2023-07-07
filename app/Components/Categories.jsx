"use client"
import React, { useEffect, useState, useRef } from "react";
import Icons from "./Icons";
import CategoriesExpansion from "./CategoriesExpansion";

const Categories = () => {
  const [isPhoneVersion, setIsPhoneVersion] = useState(false);
  const [isTabletVersion, setIsTabletVersion] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const categoriesRef = useRef(null);

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

  const categories = [
    { id: 0, name: "Sales", icon: <Icons.SalesIcon /> },
    { id: 1, name: "HR", icon: <Icons.HRIcon /> },
    { id: 2, name: "Drawing", icon: <Icons.DrawingIcon /> },
    { id: 3, name: "Big Data", icon: <Icons.BigDataIcon /> },
    { id: 4, name: "Design", icon: <Icons.DesignIcon /> },
    { id: 5, name: "Marketing", icon: <Icons.MarketingIcon /> },
    { id: 6, name: "Astronomy", icon: <Icons.AstronomyIcon /> },
  ];

  const phoneCategories = [...categories.slice(4), { id: 7, name: "More", icon: <Icons.AstronomyIcon /> }];
  const tabletCategories = [...categories.slice(2), { id: 7, name: "More", icon: <Icons.AstronomyIcon /> }];

  const handleCategoryClick = (categoryId) => {
    if (categoryId === 7) {
      setSelectedCategoryId(categoryId);
    }
  };

  return (
    <div>
      <h1 className="p-2 font-bold">Categories</h1>
      <div
        ref={categoriesRef}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 cursor-pointer px-10"
      >
        {isPhoneVersion
          ? phoneCategories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col items-center px-1 py-2 m-4 rounded-lg shadow category-icon--container hover:bg-[#CBE1FA] hover:border-blue-500 border hover:text-[#2E8DFF] text-[#616161] bg-[#fbfbfb]"
                onClick={() => handleCategoryClick(category.id)}
              >
                <div>{category.icon}</div>
                <p className="text-sm font-bold">{category.name}</p>
              </div>
            ))
          : isTabletVersion
          ? tabletCategories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col items-center px-1 py-2 m-4 rounded-lg shadow category-icon--container hover:bg-[#CBE1FA] hover:border-blue-500 border hover:text-[#2E8DFF] text-[#616161] bg-[#fbfbfb]"
                onClick={() => handleCategoryClick(category.id)}
              >
                <div>{category.icon}</div>
                <p className="text-sm font-bold">{category.name}</p>
              </div>
            ))
          : categories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col items-center px-1 py-2 m-4 rounded-lg shadow category-icon--container hover:bg-[#CBE1FA] hover:border-blue-500 border hover:text-[#2E8DFF] text-[#616161] bg-[#fbfbfb]"
                onClick={() => handleCategoryClick(category.id)}
              >
                <div>{category.icon}</div>
                <p className="text-sm font-bold">{category.name}</p>
              </div>
            ))}
      </div>
      {selectedCategoryId === 7 && <CategoriesExpansion />}
    </div>
  );
};

export default Categories;
