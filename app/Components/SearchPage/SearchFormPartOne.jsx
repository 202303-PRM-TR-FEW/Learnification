'use client';
import React from "react";
import { useState } from "react";

export default function SearchFormPartOne(){

    const topSearches = [
        { id: 0, name: "Marketing Strategy"},
        { id: 1, name: "UX Design"},
        { id: 2, name: "Excel"},
        { id: 3, name: "Adobe Photoshop"},
        { id: 4, name: "CRM"},
        { id: 5, name: "Photography"},
        { id: 6, name: "Content Making"},
      ];
    
    return(
        <div>
            <div className="mt-5 mb-4 ml-3 mr-3 lg:mt-8">
                <h1 className="font-bold mb-2 md:text-xl">Find Your Favorites</h1>
                <div className="flex mt-2 lg:w-8/12">
                    <input
                        type="text"
                        placeholder="Search categories"
                        className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none w-full"/>
                    <button
                        type="button"
                        className="px-4 py-2 ml-2 bg-blue-500 text-white font-bold text-s rounded-xl hover:bg-blue-600 focus:outline-none">
                        SEARCH
                    </button>
                </div>
                <hr class="h-px my-8 bg-gray-200 border-0"/>
                <div>
                    <h1>Top Searches</h1>
                    <div className="grid grid-cols-1 m-3 md:grid-cols-3 lg:grid-cols-7 lg:gap-2">
                    {topSearches.map((search) => (
                        <button
                        key={search.id}
                        className={'inline-block px-4 py-2 mb-2 rounded-full border border-lightgray text-gray-800 pointer-events-none'}
                        >
                        {search.name}
                        </button>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}