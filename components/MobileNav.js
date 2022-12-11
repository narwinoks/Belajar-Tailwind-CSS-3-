import React, { useState, Fragment } from "react";
import ResponsiveNavLink from "./ResponsiveNavLink";
import { Menu, Transition } from "@headlessui/react";

import Line from "./Line";
import DropDownLink from "./DropdownLink";

export default function MobileNav() {
  const auth = {
    check: true,
    user: {
      name: "Winarno",
    },
  };
  const [open, setOpen] = useState(false);
  return (
    <Menu
      as={"div"}
      className="w-full flex md:hidden items-center justify-between py-2 px-2.5 border-b border-gray-700"
    >
      <a href="#" className="text-white font-semibold uppercase">
        Brand
      </a>
      {/* <Menu></Menu> */}
      {/* <div
        onClick={() => setOpen(false)}
        className={`${
          open ? "block" : "hidden"
        } bg-transparent absolute w-full inset-0`}
      ></div> */}
      <Menu.Button className="focus:outline-none">
        {/* prettier-ignore */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white"> <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"/>
      </svg>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="div"
          className="shadow-sm border bg-white absolute right-0 mr-12 top-0 mt-3 py-1 rounded-lg w-56 overflow-hidden"
        >
          <ResponsiveNavLink href="#">Home</ResponsiveNavLink>
          <ResponsiveNavLink href="#">Articles</ResponsiveNavLink>
          <ResponsiveNavLink href="#">Gallery</ResponsiveNavLink>
          <ResponsiveNavLink href="#">About</ResponsiveNavLink>
          <ResponsiveNavLink href="#">Contact</ResponsiveNavLink>
          <Line></Line>
          {auth.check ? (
            <>
              <DropDownLink href="/account-settings">
                Account settings
              </DropDownLink>
              <DropDownLink href="/account-settings">Dashboard</DropDownLink>
              <DropDownLink href="/account-settings">Setting</DropDownLink>
              <DropDownLink href="/account-settings">
                Change Password
              </DropDownLink>
              <Line></Line>
              <DropDownLink href="/account-settings">
                {auth.user.name}
              </DropDownLink>
              <DropDownLink href="/account-settings">Logout</DropDownLink>
            </>
          ) : (
            ""
          )}
          <ResponsiveNavLink href="#">Sign In</ResponsiveNavLink>
          <ResponsiveNavLink href="#">Sign Up</ResponsiveNavLink>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
