'use client'
import React, { useState } from 'react';
import Icons from '@/app/Components/Icons';
import Image from "next/image";
import Alex from '@/public/Alex.jpeg';
import Laura from '@/public/laura.jpeg';

const suggestions = [
  { image: Laura, name: 'Laura Evans' },
  { image: Alex, name: 'Alexandar Thomson' },
  { image: Laura, name: 'Laura Evans' },
  { image: Alex, name: 'Alexandar Thomson' },
  { image: Laura, name: 'Laura Evans' },
  { image: Alex, name: 'Alexandar Thomson' },
];

function FriendSuggestion({ myButton }) {
  const [showAll, setShowAll] = useState(false);
  const visibleSuggestions = showAll ? suggestions : suggestions.slice(0, 2);

  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const renderButton = () => {
    if (myButton === "addDelete") {
      return (
        <>
          <button className="bg-blue-400 p-4 rounded-xl mr-4 text-white shadow-lg max-[399px]:w-1/2"><Icons.AddButton/></button>
          <button className="max-[399px]:w-1/2"><Icons.DeleteButton/></button>
        </>
      );
    } else {
      return (
        <button className="w-full text-start text-sky-500 max-[399px]:text-center max-[399px]:bg-blue-400 max-[399px]:text-white max-[399px]:py-2 rounded-lg">PROFILE</button>
      );
    }
  };

  return (
    <div className="font-medium mb-2">
      <h1 className="text-2xl mb-2">Friend Suggestion</h1>
      <div className="grid grid-cols-1 divide-y bg-white py-1 px-6 rounded-3xl w-full lg:mb-24">
        {visibleSuggestions.map((suggestion, index) => (
          <div key={index} className="flex flex-col min-[400px]:flex-row w-full min-[400px]:items-center min-[400px]:justify-between py-2 max-[399px]:gap-y-2">
            <div className="flex items-center">
              <div className="rounded-full overflow-hidden w-fit h-10 mr-8">
                <Image src={suggestion.image} width={40} height={40} sizes="100vw" alt='profilePic' />
              </div>
              <p>{suggestion.name}</p>
            </div>
            <div className="flex font-normal max-[399px]:w-full">
              {renderButton()}
            </div>
          </div>
        ))}
        <button className="py-3 w-full text-start max-[399px]:text-center text-sky-500" onClick={toggleShowAll}>
          {showAll ? 'VIEW LESS' : 'VIEW ALL'}
        </button>
      </div>
    </div>
  )
}

export default FriendSuggestion;
