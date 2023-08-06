'use client'
import { useState, useEffect } from 'react';
import Header from "@/app/Components/Header";
import SideBar from "@/app/Components/SideBar";
import Loading from '@/app/Components/LoadingPage/Loading';

export default function Layout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  }, []);

  return (
    <div>
    {isLoading ? <Loading/> :  <div className="flex flex-col">
      <div className="bg-white-smoke lg:hidden">
        <Header/>
      </div>
      <div className="bg-white-smoke min-h-screen md:flex md:items-start">
        <SideBar/>
        {children}
      </div>
    </div>}
    </div>
  );
}
