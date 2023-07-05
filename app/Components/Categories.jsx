import React, { useState } from "react";
import Icons from "./Icons";

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

  const [hoverStates, setHoverStates] = useState(categories.map(() => false));

  const handleMouseEnter = (index) => {
    setHoverStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = true;
      return newStates;
    });
  };

  const handleMouseLeave = (index) => {
    setHoverStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = false;
      return newStates;
    });
  };

  return (
    <div>
      <h1 className="p-2 font-bold">Categories</h1>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-7">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex flex-col items-center px-1 py-2 m-4 rounded-lg shadow ${
              hoverStates[index]
                ? "bg-[#CBE1FA] border-blue-500 border"
                : "bg-[#fbfbfb]"
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div>
              {React.cloneElement(category.icon, {
                fill: hoverStates[index]
                  ? "rgb(46, 141, 255)"
                  : "rgb(177, 177, 177)",
              })}
            </div>
            <p
              className={`text-base font-bold ${
                hoverStates[index] ? "text-[#2E8DFF]" : "text-[#616161]"
              }`}
            >
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
