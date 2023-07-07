import { useTranslations } from "next-intl";
import React from "react";

const TitleAndParagraph = () => {
  const t = useTranslations('GetStarted')
  const style = {
    header: "font-bold text-3xl sm:text-6xl my-8",
  };
  return (
    <div>
      <h1 className={style.header}>{t('title')}</h1>
      <p className="my-8 sm:text-xl max-w-[40ch]">
        {t('description')}
      </p>
    </div>
  );
};

export default TitleAndParagraph;
