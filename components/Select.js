import React from "react";

export default function Select({ children, ...props }) {
  return (
    <select
      className="w-full rounded-xl border-gray-300 shadow-sm focus:ring focus:ring-indigo-100 focus:border-indigo-400 transition duration-200"
      {...props}
    >
      {children}
    </select>
  );
}
