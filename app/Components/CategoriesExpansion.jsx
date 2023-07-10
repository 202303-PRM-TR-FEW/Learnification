import React from 'react';

function CategoriesExpansion({categories}){
    return (
        <div className="flex justify-center px-6"> 
            <div className={`bg-white/25 m-5 rounded-xl backdrop-blur-xl transition-all duration-300 ease-out focus:ease-in grid grid-cols-2 grid-rows-2 md:grid-cols-${categories.length} lg:grid-cols-${categories.length} md:grid-rows-1 cursor-pointer w-11/12`}>
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