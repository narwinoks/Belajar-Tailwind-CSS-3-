import React, { Fragment } from "react";
import MobileNav from "./MobileNav";
import NavLink from "./NavLink";
import { Menu, Transition } from "@headlessui/react";
import DropDownLink from "./DropdownLink";
import Line from "./Line";
import Navbar from "./Navbar";
const Title = ({ children }) => {
  <h1 className="text-xl md:text-3xl font-bold">{children}</h1>;
  // console.log(children, "oke1");
};
const Body = ({ children }) => {
  // console.log(children, "oke2");
  <div>{children}</div>;
};

const Hero = ({ children }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 mb-8">
      <MobileNav></MobileNav>
      <Navbar></Navbar>
      <div className="container">
        <div className="w-full md:w-2/3">{children}</div>
      </div>
    </div>
  );
};

// console.log(children);
Hero.Title = Title;
// console.log(Hero);
// Hero.Body = Body;
export default Hero;
