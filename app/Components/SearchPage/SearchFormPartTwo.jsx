import { React, useState } from "react";
import Icons from "../Icons";
import CategoriesArray from "../CategoriesArray";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useTranslations } from "next-intl";
import RecommendedForYou from "./RecommendedForYou";

const SearchFormPartTwo = ({ courses }) => {
  const categories = CategoriesArray();
  const t = useTranslations("Search");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedStars, setSelectedStars] = useState(null);
  const categoryTranslations = {
    Satışlar: "Sales",
    İK: "HR",
    Çizim: "Drawing",
    "Büyük Veri": "Big Data",
    Tasarım: "Design",
    Pazarlama: "Marketing",
    Astronomi: "Astronomy",
  };

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

  const filteredCourses = courses.filter((course) => {
    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(course.category)
    ) {
      return false;
    }

    if (selectedStars !== null) {
      const roundedRating = Math.round(course.rating);
      return roundedRating === selectedStars;
    }

    return true;
  });

  return (
    <div className="flex flex-col justify-between gap-8 mt-4">
      <section>
        <h3 className="uppercase font-bold mb-4">{t("Categories.title")}</h3>
        <ul className="flex flex-wrap justify-start lg:justify-between gap-4">
          {categories.map((category) => (
            <li key={category.id}>
              <label className="text-base leading-[1.1] grid grid-cols-[1em_auto] gap-[0.5em]">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    const turkishCategory = e.target.value;
                    const englishCategory =
                      categoryTranslations[turkishCategory];
                    setSelectedCategories((prevSelectedCategories) => {
                      if (e.target.checked) {
                        return [...prevSelectedCategories, englishCategory];
                      } else {
                        return prevSelectedCategories.filter(
                          (selectedCategory) =>
                            selectedCategory !== englishCategory
                        );
                      }
                    });
                  }}
                  value={category.name}
                />
                {category.name}
              </label>
            </li>
          ))}
        </ul>
      </section>
      <div className="grid grid-cols-1 gap-8 md:grid-flow-col md:justify-stretch lg:justify-start">
        {/* Rating Start */}
        <section>
          <h3 className="uppercase font-bold mb-4">{t("Rating.title")}</h3>
          <Stack spacing={1}>
            <Rating
              name="half-rating"
              defaultValue={2.5}
              icon={<CustomStarIcon style={{ marginRight: "5px" }} />}
              emptyIcon={<Icons.StarIcon empty={true} />}
              onChange={(event, newValue) => {
                setSelectedStars(newValue);
              }}
            />
          </Stack>
        </section>

        <section className="">
          <h3 className="uppercase font-bold mb-4">{t("Level.title")}</h3>
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
      <RecommendedForYou courses={filteredCourses} />
    </div>
  );
};

export default SearchFormPartTwo;
