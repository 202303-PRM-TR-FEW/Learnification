import Header from "@/app/Components/Header";
import Loading from "@/app/Components/LoadingPage/Loading";
import SideBar from "@/app/Components/SideBar";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <div className="flex flex-col">
          <div className="bg-white-smoke lg:hidden">
            <Header />
          </div>
          <div className="bg-white-smoke min-h-screen md:flex md:items-start">
            <SideBar />
            {children}
          </div>
        </div>
      </Suspense>
    </div>
  );
}
