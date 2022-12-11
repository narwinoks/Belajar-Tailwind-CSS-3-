import React, { Fragment } from "react";
import DropDownLink from "./DropdownLink";
import NavLink from "./NavLink";
import { Menu, Transition } from "@headlessui/react";

const Navbar = () => {
  const auth = {
    check: false,
    user: {
      name: "Winarno",
    },
  };
  return (
    <div className="hidden lg:block  border-b border-white/10 py-3">
      <div className="container">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <a href="/" className="text-white font-medium uppercase mr-6">
              Brand
            </a>

            <NavLink href="/">Home</NavLink>
            <NavLink href="/article">Articles</NavLink>
            <NavLink href="#">Gallery</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Contact</NavLink>
          </div>
          {auth.check ? (
            <div className="flex items-center gap-x-2">
              <Menu className="relative" as={"div"}>
                {/* Render no wrapper, instead pass in a `button` manually. */}
                <Menu.Button className="flex text-white items-center hover:bg-transparent gap-x-5">
                  {auth.user.name}
                  {/* prettier-ignore */}
                  <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
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
                    className="bg-white shadow-sm border absolute right-0 top-0 mt-8 py-1 rounded-lg w-56 overflow-hidden"
                  >
                    <DropDownLink href="/account-settings">
                      Account settings
                    </DropDownLink>
                    <DropDownLink href="/account-settings">
                      Dashboard
                    </DropDownLink>
                    <DropDownLink href="/account-settings">
                      Setting
                    </DropDownLink>
                    <DropDownLink href="/article">Article</DropDownLink>
                    <DropDownLink href="/account-settings">
                      Change Password
                    </DropDownLink>
                    <Line></Line>
                    <DropDownLink href="/account-settings">Logout</DropDownLink>
                    {/* ... */}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          ) : (
            <div className="flex items-center gap-x-2">
              <NavLink href="/login">Sign up</NavLink>
              <NavLink href="/register ">Sign in</NavLink>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
