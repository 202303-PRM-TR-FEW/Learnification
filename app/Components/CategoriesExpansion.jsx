import React from "react";

function CategoriesExpansion({ categories, handleCategoryClick }) {
  return (
    <div className="flex justify-center">
      <div
        className={`bg-white/25 mt-5 rounded-xl backdrop-blur-xl transition-all duration-300 ease-out focus:ease-in grid grid-cols-2 grid-rows-2 md:grid-cols-${categories.length} lg:grid-cols-${categories.length} md:grid-rows-1 cursor-pointer w-full`}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex flex-col items-center px-1 py-3 m-2 rounded-lg shadow category-icon--container hover:bg-[#CBE1FA] hover:border-blue-500 border hover:text-[#2E8DFF] text-[#616161] bg-[#fbfbfb]`}
            onClick={() => handleCategoryClick(category.id, category.name)}
          >
            <div>{category.icon}</div>
            <p className={`text-sm font-bold`}>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesExpansion;
