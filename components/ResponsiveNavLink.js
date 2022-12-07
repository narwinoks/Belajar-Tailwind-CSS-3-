import React from "react";

export default function ResponsiveNavLink({ href, children }) {
  return (
    <a
      className="px-4 py-2 text-sm hover:bg-gray-200 hover:text-black block"
      href={href}
    >
      {children}
    </a>
  );
}
