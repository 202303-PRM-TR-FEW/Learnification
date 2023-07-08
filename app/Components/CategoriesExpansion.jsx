import React from 'react';
import Icons from "./Icons";

const categories = [
    { id: 4, name: "Design", icon: <Icons.DesignIcon /> },
    { id: 5, name: "Marketing", icon: <Icons.MarketingIcon /> },
    { id: 6, name: "Astronomy", icon: <Icons.AstronomyIcon /> },
  ];

function CategoriesExpansion(){
    return (
        <div className="bg-gray-950/25 m-5 rounded-xl backdrop-blur-xl transition-all duration-500 ease-in-out transform"> 
            <div className={`grid grid-cols-2 grid-rows-2 md:grid-cols-${categories.length} lg:grid-cols-${categories.length} md:grid-rows-1 cursor-pointer`}>
                {categories.map((category, index) => (
                <div key={index}
                className={`flex flex-col items-center px-1 py-3 m-2 rounded-lg shadow category-icon--container hover:bg-[#CBE1FA] hover:border-blue-500 border hover:text-[#2E8DFF] text-[#616161] bg-[#fbfbfb]`}>
                    <div>{category.icon}</div>
                    <p className={`text-sm font-bold`}>{category.name}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default CategoriesExpansion;