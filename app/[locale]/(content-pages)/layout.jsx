import React from "react";
import SideBar from "../../Components/SideBar";
import Header from "@/app/Components/Header";
export default function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <div className="bg-white-smoke lg:hidden">
        <Header />
      </div>
      <div
        className="bg-white-smoke min-h-screen md:flex md:items-start"
      >
        <SideBar />
        {children}
      </div>
    </div>
  );
}
