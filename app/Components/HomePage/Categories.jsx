import React from "react";
import Icons from "../Icons";
import { useTranslations } from "next-intl";

const Categories = () => {
  const categories = [
    { id: 0, name: "Sales", icon: <Icons.SalesIcon /> },
    { id: 1, name: "HR", icon: <Icons.HRIcon /> },
    { id: 2, name: "Drawing", icon: <Icons.DrawingIcon /> },
    { id: 3, name: "Big Data", icon: <Icons.BigDataIcon /> },
    { id: 4, name: "Design", icon: <Icons.DesignIcon /> },
    { id: 5, name: "Marketing", icon: <Icons.MarketingIcon /> },
    { id: 6, name: "Astronomy", icon: <Icons.AstronomyIcon /> },
  ];
  const t = useTranslations("Home")
  return (
    <div>
      <h1 className="p-2 font-bold">
        {t('Categories.title')}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-7 cursor-pointer px-10">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex flex-col items-center px-1 py-2 m-4 rounded-lg shadow category-icon--container hover:bg-[#CBE1FA] hover:border-blue-500 border hover:text-[#2E8DFF] text-[#616161] bg-[#fbfbfb]`}
          >
            <div>{category.icon}</div>
            <p className={`text-sm font-bold`}>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
