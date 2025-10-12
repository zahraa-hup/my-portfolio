"use client";
import React from "react";
import Link from "next/link";
import { useRef } from "react";
function Header() {
  const menu = useRef();
  return (
    <header className="bg-transparent fixed top-0 left-0 right-0">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 ">
        <Link href="/">
          <span className="sr-only">Home</span>
          <div className="text-4xl text-white">ZA</div>
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-purple-800 transition hover:text-gray-700 text-2xl"
                  href="/"
                >
                  {" "}
                  Home{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-purple-800 transition hover:text-gray-700  text-2xl"
                  href="/projects"
                >
                  {" "}
                  Projects{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-purple-800 transition hover:text-gray-700  text-2xl"
                  href="/resume"
                >
                  {" "}
                  Resume{" "}
                </Link>
              </li>
            </ul>
          </nav>

          <div
            className="flex items-center gap-4 "
            onClick={() => {
              menu.current.classList.toggle("hidemenue");
              menu.current.classList.toggle("viewemenu");
            }}
          >
            <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div
            className=" w-[300px] h-[350px]  hidemenue bg-amber-700 text-white text-xl md:hidden "
            ref={menu}
          >
            <div className="flex  flex-col gap-10 p-10 text-white">
              <Link
                href={"/"}
                className="cursor-pointer border-b-2 p-2 hover:text-fuchsia-900"
              >
                Home
              </Link>
              <Link
                href={"projects"}
                className="cursor-pointer border-b-2 p-2 hover:text-fuchsia-900"
              >
                Projects
              </Link>
              <Link
                href={"resume"}
                className="cursor-pointer border-b-2 p-2 hover:text-fuchsia-900"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
