import "../../globals.css";
import Link from 'next/link';
function SideBar() {
  return (
    <>
      <div className="fixed top-7 left-6 z-50">
        <Link href="/">
          <span>
            <svg className="w-[3em] h-[2em] px-[1em] py-[0.3em] lg:w-[4em] lg:h-[2m] lg:px-[1em] lg:py-[0.4em] bg-blue-500 rounded-[20px] overflow-visible z-[1] fill-white" viewBox="0 0 576 512">
              <path d="M575.81 217.98C572.64 157.41 518.28 112 457.63 112h-9.37c-52.82 0-104.25-16.25-147.74-46.24-41.99-28.96-96.04-41.62-153.21-28.7C129.3 41.12-.08 78.24 0 224c.04 70.95 38.68 132.8 95.99 166.01V464c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-54.26c15.36 3.96 31.4 6.26 48 6.26 5.44 0 10.68-.73 16-1.18V464c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-59.43c14.24-5.06 27.88-11.39 40.34-19.51C342.07 355.25 393.86 336 448.46 336c25.48 0 16.01-.31 23.05-.78l74.41 136.44c2.86 5.23 8.3 8.34 14.05 8.34 1.31 0 2.64-.16 3.95-.5 7.09-1.8 12.05-8.19 12.05-15.5 0 0 .14-240.24-.16-246.02zM463.97 248c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm80 153.25l-39.86-73.08c15.12-5.83 28.73-14.6 39.86-25.98v99.06z"></path>
            </svg>
          </span>
        </Link>
      </div>
      <div className="flex justify-center md:flex-col md:mt-[4em]">
        <nav className="fixed bottom-2 md:static z-50">
          <ul className="flex justify-around md:justify-evenly w-[85vw] list-none md:bg-transparent bg-black/75 backdrop-blur-xl p-[1em] rounded-[40px] md:flex-col md:items-center md:h-[25em] md:w-[7em] z-40">
            <li>
              <Link href="/home" className="mainLinks no-underline text-[#b1b1b1]">
                <span>
                  <svg className="w-full h-6 lg:h-7 overflow-visible z-[1] fill-[#b1b1b1]" viewBox="0 0 576 512">
                    <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                  </svg>
                </span>
                <span className="hidden lg:block lg:text-center lg:text-sm">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/search" className="mainLinks no-underline text-[#b1b1b1]">
                <span>
                  <svg className="w-full  h-6 lg:h-7 overflow-visible z-[1] fill-[#b1b1b1]" viewBox="0 0 512 512">
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
                </span>
                <span className="hidden lg:block lg:text-center lg:text-sm">Search</span>
              </Link>
            </li>
            <li>
              <Link href="/courses/courseId" className="mainLinks no-underline text-[#b1b1b1]">
                <span>
                  <svg className="w-full h-6 lg:h-7 overflow-visible z-[1] fill-[#b1b1b1]" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path>
                  </svg>
                </span>
                <span className="hidden lg:block lg:text-sm">Courses</span>
              </Link>
            </li>
            <li>
              <Link href="/saved" className="mainLinks no-underline text-[#b1b1b1]">
                <span>
                  <svg className="w-full h-6 lg:h-7 overflow-visible z-[1] fill-[#b1b1b1]" viewBox="0 0 384 512">
                    <path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"></path>
                  </svg>
                </span>
                <span className="hidden lg:block lg:text-center lg:text-sm">Saved</span>
              </Link>
            </li>
            <li>
              <Link href="/profile" className="mainLinks no-underline text-[#b1b1b1]">
                <span>
                  <svg className="w-full h-6 lg:h-7 overflow-visible z-[1] fill-[#b1b1b1]" viewBox="0 0 496 512">
                    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
                  </svg>
                </span>
                <span className="hidden lg:block lg:text-center lg:text-sm">Profile</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default SideBar;
