
import SearchFormPartTwo from "@/app/Components/SearchPage/SearchFormPartTwo";
import SearchFormPartOne from "@/app/Components/SearchPage/SearchFormPartOne";
import React from "react";

export default function Search() {
  return (
    <div className="basis-full mt-2 px-6 sm:px-12 bg-neutral-100">
      <SearchFormPartOne/>
      <SearchFormPartTwo/>
    </div>
  );
}
