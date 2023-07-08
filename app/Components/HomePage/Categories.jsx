import React from "react";
import CategoriesArray from "../CategoriesArray";

const Categories = () => {
  return (
    <div>
      <h1 className="p-2 font-bold">Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-7 cursor-pointer px-10">
        {CategoriesArray.map((category, index) => (
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
