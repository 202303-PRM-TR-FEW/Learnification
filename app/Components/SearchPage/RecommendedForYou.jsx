/*import React from 'react'

export default function RecommendedForYou() {

    const recommended = [
        {image: "https://images.unsplash.com/photo-1569098644956-02996eb711b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHw4MHx8dXh8ZW58MXx8fHwxNjczMDE4Nzcy&ixlib=rb-4.0.3&q=80&w=1080", name:"UX Researcher", teacher: "Chris Kinley"},
        {image: "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwyfHx1eCUyMGRlc2lnbiUyMHxlbnwxfHx8fDE2NzMwMTc0MDg&ixlib=rb-4.0.3&q=80&w=1080", name:"UX Essentials", teacher: "Don Drapper"},
        {image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHw0fHx1eCUyMGRlc2lnbnxlbnwxfHx8fDE2NzMwMTkwOTQ&ixlib=rb-4.0.3&q=80&w=1080", name:"UX For Beginners", teacher: "Ben Starter"},
        {image: "https://images.unsplash.com/photo-1547027072-332f09bd6bb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHw0Mnx8dXglMjBkZXNpZ258ZW58MXx8fHwxNjczMDE5MTc5&ixlib=rb-4.0.3&q=80&w=1080", name:"How To UX", teacher: "Anna May"}
    ]
  return (
    <div className="bg-red-500">
      <h3 className="font-semibold">Recommended For You</h3>
      <div className="bg-green-500 lg:w-7/12 flex gap-x-3">
      {recommended.map((recommend, index)=>(
        <div key={index} className='bg-yellow-500 w-full py-3'>
          <img className="w-full h-28 rounded-2xl" src={recommend.image} alt="" />
          <h2 className="font-semibold pt-3">{recommend.name}</h2>
          <p className="text-sm">{recommend.teacher}</p>
        </div>
      ))}
      </div>
    </div>
  )
}*/
'use client'

import React, { useState, useEffect } from 'react';

export default function RecommendedForYou() {
  const recommended = [
    {
      image:
        'https://images.unsplash.com/photo-1569098644956-02996eb711b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHw4MHx8dXh8ZW58MXx8fHwxNjczMDE4Nzcy&ixlib=rb-4.0.3&q=80&w=1080',
      name: 'UX Researcher',
      teacher: 'Chris Kinley',
    },
    {
      image:
        'https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwyfHx1eCUyMGRlc2lnbiUyMHxlbnwxfHx8fDE2NzMwMTc0MDg&ixlib=rb-4.0.3&q=80&w=1080',
      name: 'UX Essentials',
      teacher: 'Don Drapper',
    },
    {
      image:
        'https://images.unsplash.com/photo-1618788372246-79faff0c3742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHw0fHx1eCUyMGRlc2lnbnxlbnwxfHx8fDE2NzMwMTkwOTQ&ixlib=rb-4.0.3&q=80&w=1080',
      name: 'UX For Beginners',
      teacher: 'Ben Starter',
    },
    {
      image:
        'https://images.unsplash.com/photo-1547027072-332f09bd6bb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHw0Mnx8dXglMjBkZXNpZ258ZW58MXx8fHwxNjczMDE5MTc5&ixlib=rb-4.0.3&q=80&w=1080',
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
      setPhoneVersion(window.innerWidth <= 400); // Adjust the breakpoint as needed
    };

    handleResize(); // Call the handler initially

    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener on component unmount
    };
  }, []);

  return (
    <div>
      <h3 className="font-semibold md:text-start">Recommended For You</h3>
      <div className="lg:w-7/12 sm:grid sm:grid-cols-2 md:grid-cols-4 gap-x-3">
        {phoneVersion ? (
          <div className='flex justify-center items-center gap-4 max-w-[20em] sm:w-4/5'>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 mb-10 rounded-full" onClick={handleBack} disabled={currentIndex === 0}>
              &#x2190;
            </button>
            <div className="w-80 py-3">
              <img
                className="w-full h-36 rounded-2xl"
                src={recommended[currentIndex].image}
                alt=""
              />
              <h2 className="font-semibold pt-3">
                {recommended[currentIndex].name}
              </h2>
              <p className="text-sm">{recommended[currentIndex].teacher}</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 mb-10 rounded-full" onClick={handleNext} disabled={currentIndex === recommended.length - 1}>
              &#x2192;
            </button>
          </div>
        ) : (
          recommended.map((recommend, index) => (
            <div key={index} className="sm:max-w-[15em] lg:w-full py-3">
              <img
                className="w-full h-28 rounded-2xl"
                src={recommend.image}
                alt=""
              />
              <h2 className="font-semibold pt-3">{recommend.name}</h2>
              <p className="text-sm">{recommend.teacher}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
