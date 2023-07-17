'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Alex from '@/public/Alex.jpeg'
import Laura from '@/public/Laura.jpeg'

const suggestions = [
    {image: Laura, name:'Laura Evans'},
    {image: Laura, name:'Alexandar Thomson'},
];

function FriendSuggestion() {
  return (
    <div>
        <h1>FriendSuggestion</h1>
        <div>
          {suggestions.map((suggestion, index) => (
            <div key={index}>
              <Image src={suggestion.image} alt='profilePic' />
              <p>{suggestion.name}</p>
              <button>+</button>
              <button>X</button> 
            </div>
          ))}
        </div>
    </div>
  )
}

export default FriendSuggestion
