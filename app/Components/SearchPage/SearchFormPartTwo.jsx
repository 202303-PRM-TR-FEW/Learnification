"use client";
import React from "react";
import Icons from "../Icons";
import CategoriesArray from "../CategoriesArray";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useTranslations } from "next-intl";

const SearchFormPartTwo = () => {
  const categories = CategoriesArray();
  const t = useTranslations("Search")
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
    <div className="flex flex-col justify-between gap-8 mt-4 ml-3">
       <hr className="h-px mt-10 bg-gray-200 border-0" />
      <section>
        <h2 className="uppercase mb-4 text-gray-500	font-bold text-sm">
          {t("Categories.title")}
        </h2>
        <ul className="flex flex-wrap justify-start lg:justify-between gap-4">
          {categories.map((category) => (
            <li key={category.id}>
              <label className="text-base leading-[1.1] grid grid-cols-[1em_auto] gap-[0.5em]">
                <input type="checkbox" />
                {category.name}
              </label>
            </li>
          ))}
        </ul>
      </section>
      <hr className="h-px mt-10 bg-gray-200 border-0" />
      <div className="grid grid-cols-1 gap-8 md:grid-flow-col md:justify-stretch lg:justify-start">
        {/* Rating Start */}
        <section>
        <h2 className="mb-4 text-gray-500	font-bold text-sm uppercase">
            {t("Rating.title")}
          </h2>
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
        <h2 className="mb-4 text-gray-500	font-bold text-sm uppercase">
            {t("Level.title")}
          </h2>
          <ul className="flex justify-between flex-wrap gap-4">
            <li className="mr-4">
              <label className="text-base leading-[1.1] grid grid-cols-[1em_auto] gap-[0.5em]">
                <input type="checkbox" />
                {t("Level.Beginner")}
              </label>
            </li>
            <li className="mr-4">
              <label className="text-base leading-[1.1] grid grid-cols-[1em_auto] gap-[0.5em]">
                <input type="checkbox" />
                {t("Level.Intermediate")}
              </label>
            </li>
            <li>
              <label className="text-base leading-[1.1] grid grid-cols-[1em_auto] gap-[0.5em]">
                <input type="checkbox" />
                {t("Level.Advanced")}
              </label>
            </li>
          </ul>
        </section>
      </div>
   
    </div>
  );
};

export default SearchFormPartTwo;
