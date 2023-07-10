import React from "react";
import Icons from "../Icons";

const SearchFormPartTwo = () => {
  const renderRating = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <div className="inline-block">
          <Icons.StarIcon key={i} />
        </div>
      );
    }
    return stars;
  };
  return (
    <div className="grid grid-cols-1">
      <section>
        <h3 className="uppercase font-bold">Categories</h3>
        <input type="checkbox" />
        <label htmlFor="" className="pl-2">
          Sales
        </label>
      </section>
      <br className="" />
      <div className="grid grid-cols-2">
        <section>
          <h3 className="uppercase font-bold">Rating</h3>
          {renderRating(5)}
        </section>
        <section>
          <h3 className="uppercase font-bold">Level</h3>
          <input type="checkbox" id="beginner" />
          <label htmlFor="beginner" className="pl-2">
            Beginner
          </label>
          <input type="checkbox" id="intermadiate" />
          <label htmlFor="intermadiate" className="pl-2">
            Intermadiate
          </label>
          <input type="checkbox" id="professional" />
          <label htmlFor="professional" className="pl-2">
            Professional
          </label>
        </section>
      </div>
    </div>
  );
};

export default SearchFormPartTwo;
