import "../globals.css";
import Link from "next/link";
import Icons from "./Icons";

function SideBar() {
  return (
    <>
      <div className="fixed top-7 left-6 z-50">
        <Link href="/">
          <Icons.LogoIcon />
        </Link>
      </div>
      <div className="flex justify-center md:flex-col md:mt-[4em] md:w-20">
        <nav className="fixed bottom-2 md:top-14 z-40">
          <ul className="flex justify-around md:justify-evenly w-[85vw] list-none md:bg-transparent bg-black/75 backdrop-blur-xl p-[1em] rounded-[40px] md:flex-col md:items-center md:h-[25em] md:w-[7em] z-40">
            <li>
              <Link href="/home" className="mainLinks no-underline text-[#b1b1b1]">
                <Icons.HomeIcon />
              </Link>
            </li>
            <li>
              <Link href="/search" className="mainLinks no-underline text-[#b1b1b1]">
                <Icons.SearchIcon />
              </Link>
            </li>
            <li>
              <Link href="/courses/courseId" className="mainLinks no-underline text-[#b1b1b1]">
                <Icons.CoursesIcon />
              </Link>
            </li>
            <li>
              <Link href="/saved" className="mainLinks no-underline text-[#b1b1b1]">
                <Icons.SavedIcon />
              </Link>
            </li>
            <li>
              <Link href="/profile" className="mainLinks no-underline text-[#b1b1b1]">
                <Icons.ProfileIcon />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default SideBar;