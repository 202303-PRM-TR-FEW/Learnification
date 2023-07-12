import SearchFormPartTwo from "@/app/Components/SearchPage/SearchFormPartTwo";
import React from "react";
import RecommendedForYou from "@/app/Components/SearchPage/RecommendedForYou";

export default function Search() {
  return (
    <div className="basis-full mt-2 px-6 sm:px-12 pb-20 bg-neutral-100">
      <SearchFormPartTwo/>
      <RecommendedForYou />
    </div>
  );
}
