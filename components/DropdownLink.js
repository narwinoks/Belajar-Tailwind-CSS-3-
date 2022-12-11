import React, { Fragment } from "react";
import { Menu } from "@headlessui/react";

export default function DropDownLink({ href, children }) {
  return (
    <Menu.Item>
      <a
        className="px-4 py-2 text-sm hover:bg-gray-200 hover:text-black block"
        href={href}
      >
        {children}
      </a>
    </Menu.Item>
  );
}
