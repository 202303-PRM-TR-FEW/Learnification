"use client"
import React, { useEffect, useState, useRef } from "react";
import Icons from "../Icons";
import CategoriesExpansion from "../CategoriesExpansion";
import { useTranslations } from "next-intl";

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

  const t = useTranslations("Home")
  const categories = [
    { id: 0, name: `${t('Categories.Sales')}`, icon: <Icons.SalesIcon /> },
    { id: 1, name: `${t('Categories.HR')}`, icon: <Icons.HRIcon /> },
    { id: 2, name: `${t('Categories.Design')}`, icon: <Icons.DrawingIcon /> },
    { id: 3, name: `${t('Categories.Big Data')}`, icon: <Icons.BigDataIcon /> },
    { id: 4, name: `${t('Categories.Design')}`, icon: <Icons.DesignIcon /> },
    { id: 5, name: `${t('Categories.Marketing')}`, icon: <Icons.MarketingIcon /> },
    { id: 6, name: `${t('Categories.Astronomy')}`, icon: <Icons.AstronomyIcon /> },
  ];

  const phoneCategories = [...categories.slice(0, 3), { id: 7, name: `${t('Categories.More')}`, icon: <Icons.AstronomyIcon /> }];
  const tabletCategories = [...categories.slice(0, 5), { id: 7, name: `${t('Categories.More')}`, icon: <Icons.AstronomyIcon /> }];
  const extraPhoneCat = categories.slice(3);
  const extraTabletCat = categories.slice(5);

  const handleCategoryClick = (categoryId) => {
    if (categoryId === 7) {
      setSelectedCategoryId(categoryId);
    }
  };

  return (
    <div>
      <h1 className="pt-10 pb-5 text-2xl font-bold">{t('Categories.title')}</h1>
      <div
        ref={categoriesRef}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 cursor-pointer"
      >
        {isPhoneVersion
          ? phoneCategories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col items-center px-1 py-2 rounded-xl shadow category-icon--container hover:bg-[#CBE1FA] hover:border-blue-500 border hover:text-[#2E8DFF] text-[#616161] bg-[#fbfbfb]"
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
                className="flex flex-col items-center px-1 py-2 rounded-xl shadow category-icon--container hover:bg-[#CBE1FA] hover:border-blue-500 border hover:text-[#2E8DFF] text-[#616161] bg-[#fbfbfb]"
                onClick={() => handleCategoryClick(category.id)}
              >
                <div>{category.icon}</div>
                <p className="text-sm font-bold">{category.name}</p>
              </div>
            ))
          : categories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col items-center px-1 py-2 rounded-xl shadow category-icon--container hover:bg-[#CBE1FA] hover:border-blue-500 border hover:text-[#2E8DFF] text-[#616161] bg-[#fbfbfb] w-full"
                onClick={() => handleCategoryClick(category.id)}
              >
                <div>{category.icon}</div>
                <p className="text-sm font-bold">{category.name}</p>
              </div>
            ))}
      </div>
      {selectedCategoryId === 7 && (
      <CategoriesExpansion categories={isPhoneVersion ? extraPhoneCat : extraTabletCat} /> )}
    </div>
  );
};

export default Categories;
