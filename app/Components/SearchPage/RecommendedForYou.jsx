'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import howtoux from '@/public/howtoux.jpeg'
import { useTranslations } from "next-intl";

export default function RecommendedForYou() {
  const t = useTranslations("Search")
  const recommended = [
    {
      image: howtoux,
      name: 'UX Researcher',
      teacher: 'Chris Kinley',
    },
    {
      image: howtoux,
      name: 'UX Essentials',
      teacher: 'Don Drapper',
    },
    {
      image: howtoux,
      name: 'UX For Beginners',
      teacher: 'Ben Starter',
    },
    {
      image: howtoux,
      name: 'How To UX',
      teacher: 'Anna May',
    },
  ];

  const [phoneVersion, setPhoneVersion] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < recommended.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setPhoneVersion(window.innerWidth <= 767); 
    };

    handleResize(); 

    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  return (
    <div>
         <hr className="h-px my-10 bg-gray-200 border-0" />
         <h2 className="mb-4 text-gray-500	font-bold text-sm uppercase">{t("Recommended For You.title")}</h2>
      <div className="lg:w-7/12 grid md:grid-cols-4 gap-x-3">
        {phoneVersion ? (
          <div className='flex justify-center items-center md:w-4/5 gap-x-3'>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 mb-10 rounded-full" onClick={handleBack} disabled={currentIndex === 0}>
              &#x2190;
            </button>
            <div className="w-full flex justify-center max-w-md flex-col items-center ">
              <div className="rounded-2xl overflow-hidden w-full relative h-[170px] flex justify-center ">
                <Image src={recommended[currentIndex].image} sizes="100vw" alt="Recommended courses" />
              </div>
              <h2 className="font-semibold pt-3">
                {recommended[currentIndex].name}
              </h2>
              <p className="text-sm">{recommended[currentIndex].teacher}</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-black py-1 px-2 mb-10 rounded-full" onClick={handleNext} disabled={currentIndex === recommended.length - 1}>
              &#x2192;
            </button>
          </div>
        ) : (
          recommended.map((recommend, index) => (
            <div key={index} className="lg:w-full py-3">
              <div className="rounded-2xl overflow-hidden relative w-full h-[120px]">
                <Image src={recommend.image} fill sizes="100vw" alt="Recommended courses" />
              </div>
              <h2 className="font-semibold pt-3">{recommend.name}</h2>
              <p className="text-sm">{recommend.teacher}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
