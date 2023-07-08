"use client";
import React from "react";
import Icons from "../Icons";
import CategoriesArray from "../CategoriesArray";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const SearchFormPartTwo = () => {
  const CustomStarIcon = (props) => {
    const { value, ...other } = props;

    return (
      <span {...other}>
        {Array.from(Array(value), (_, index) => (
          <Icons.StarIcon key={index} />
        ))}
      </span>
    );
  };

  return (
    <div className="flex flex-col justify-between gap-8 mt-4">
      <section>
        <h3 className="uppercase font-bold mb-4">Categories</h3>
        <ul className="flex flex-wrap justify-start lg:justify-between gap-4">
          {CategoriesArray.map((category) => (
            <li key={category.id}>
              <label className="text-base leading-[1.1] grid grid-cols-[1em_auto] gap-[0.5em]">
                <input type="checkbox" />
                {category.name}
              </label>
            </li>
          ))}
        </ul>
      </section>
      <div className="grid grid-cols-1 gap-8 md:grid-flow-col md:justify-stretch lg:justify-start">
        {/* Rating Start */}
        <section>
          <h3 className="uppercase font-bold mb-4">Rating</h3>
          <Stack spacing={1}>
            <Rating
              name="half-rating"
              defaultValue={2.5}
              icon={<CustomStarIcon style={{ marginRight: "5px" }} />}
              emptyIcon={<Icons.StarIcon empty={true} />}
            />
          </Stack>
        </section>

        <section className="">
          <h3 className="uppercase font-bold mb-4">Level</h3>
          <ul className="flex justify-between flex-wrap gap-4">
            <li className="mr-4">
              <label className="text-base leading-[1.1] grid grid-cols-[1em_auto] gap-[0.5em]">
                <input type="checkbox" />
                Beginner
              </label>
            </li>
            <li className="mr-4">
              <label className="text-base leading-[1.1] grid grid-cols-[1em_auto] gap-[0.5em]">
                <input type="checkbox" />
                Intermadiate
              </label>
            </li>
            <li>
              <label className="text-base leading-[1.1] grid grid-cols-[1em_auto] gap-[0.5em]">
                <input type="checkbox" />
                Professional
              </label>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default SearchFormPartTwo;
