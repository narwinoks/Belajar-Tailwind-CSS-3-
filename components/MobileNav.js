import React, { useState } from "react";
import ResponsiveNavLink from "./ResponsiveNavLink";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex md:hidden items-center justify-between py-2 px-2.5 border-b border-gray-700">
      <a href="#" className="text-white font-semibold uppercase">
        Brand
      </a>
      <div
        onClick={() => setOpen(false)}
        className={`${
          open ? "block" : "hidden"
        } bg-transparent absolute w-full inset-0`}
      ></div>
      <button
        className="focus:outline-none"
        onClick={() => setOpen((open) => !open)}
      >
        {/* prettier-ignore */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white"> <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"/>
      </svg>
      </button>
      <div
        className={`${
          open ? "block" : "hidden"
        } bg-white absolute right-0 mr-12 top-0 mt-4 py-1 rounded-lg w-56 overflow-hidden`}
      >
        <ResponsiveNavLink href="#">Home</ResponsiveNavLink>
        <ResponsiveNavLink href="#">Articles</ResponsiveNavLink>
        <ResponsiveNavLink href="#">Gallery</ResponsiveNavLink>
        <ResponsiveNavLink href="#">About</ResponsiveNavLink>
        <ResponsiveNavLink href="#">Contact</ResponsiveNavLink>
        <div className="w-full h-px bg-gray-300 my-1"></div>
        <ResponsiveNavLink href="#">Sign In</ResponsiveNavLink>
        <ResponsiveNavLink href="#">Sign Up</ResponsiveNavLink>
      </div>
    </div>
  );
}
