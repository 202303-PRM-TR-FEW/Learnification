import React from "react";
import Icons from "../Icons";
import { useTranslations } from "next-intl";



const Categories = () => {
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
