import React from "react";
import MobileNav from "./MobileNav";
import NavLink from "./NavLink";

export default function Hero() {
  const auth = {
    check: true,
    user: {
      name: "Winarno",
    },
  };
  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <MobileNav></MobileNav>
      <div className="hidden lg:block  border-b border-white/10 py-3">
        <div className="container">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <a href="#" className="text-white font-medium uppercase mr-6">
                Brand
              </a>

              <NavLink href="#">Home</NavLink>
              <NavLink href="#">Articles</NavLink>
              <NavLink href="#">Gallery</NavLink>
              <NavLink href="#">About</NavLink>
              <NavLink href="#">Contact</NavLink>
            </div>
            {auth.check ? (
              <div className="flex items-center gap-x-2">
                <NavLink
                  href="#"
                  className="flex items-center hover:bg-transparent gap-x-5"
                >
                  {auth.user.name}
                  {/* prettier-ignore */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </NavLink>
              </div>
            ) : (
              <div className="flex items-center gap-x-2">
                <NavLink href="#">Sign up</NavLink>
                <NavLink href="#">Sign in</NavLink>
              </div>
            )}
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="w-full md:w-2/3">
          <div className="text-white sm:py-8 py-4 md:py-16">
            <header className="text-xl md:text-3xl font-bold">
              New Revolution
            </header>
            <p className="text-base md:text-xl leading-relaxed font-light mt-4 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <a
                href="#"
                className="underline decoration-sky-500 text-sky-400 font-medium"
              >
                Dolorem quam
              </a>
              , recusandae quis dolorum veritatis nulla, nemo consequuntur
              temporibus quisquam expedita libero est facere ipsum laboriosam
              eveniet itaque. Rem, dicta temporibus?
            </p>
            <a
              href="#"
              className="bg-white px-4 py-2 text-sm text-gray-900 md:px-6 md:py-2.5 rounded-xl  font-medium inline-flex shadow-inner hover:bg-gray-50 hover:text-blue-200 transition duration-200 md:shadow-gray-400"
            >
              Browse
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
