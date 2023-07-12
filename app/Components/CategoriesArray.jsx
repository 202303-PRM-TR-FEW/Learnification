import React from "react";
import Icons from "./Icons";
import { useTranslations } from "next-intl";

const CategoriesArray = () => {
  const t = useTranslations("CategoriesArray");

  const categories = [
    { id: 0, name: t("Sales"), icon: <Icons.SalesIcon /> },
    { id: 1, name: t("HR"), icon: <Icons.HRIcon /> },
    { id: 2, name: t("Drawing"), icon: <Icons.DrawingIcon /> },
    { id: 3, name: t("Big Data"), icon: <Icons.BigDataIcon /> },
    { id: 4, name: t("Design"), icon: <Icons.DesignIcon /> },
    { id: 5, name: t("Marketing"), icon: <Icons.MarketingIcon /> },
    { id: 6, name: t("Astronomy"), icon: <Icons.AstronomyIcon /> },
  ];

  return categories;
};

export default CategoriesArray;
