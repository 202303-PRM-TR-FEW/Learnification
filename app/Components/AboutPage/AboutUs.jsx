import React from "react";
import { useTranslations } from "next-intl";

const AboutUs = () => {
  const t = useTranslations('About')
  return (  
        <div className="basis-full my-4 mx-4 text-center lg:text-left lg:pl-4 ">
          <h1 className="font-bold text-3xl mt-8">{t('title')}</h1>
          <p className="my-8 pb-8 text-xl">
          {t('description')}
          </p>
        </div>
  );
};

export default AboutUs;
