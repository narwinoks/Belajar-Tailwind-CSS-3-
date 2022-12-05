import React from "react";

export default function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`${
        className
          ? className
          : " bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 hover:bg-blue-700"
      } px-5 py-2.5 text-sm font-medium transition duration-300  rounded-xl text-white focus:outline-none border border-transparent`}
    >
      {children}
    </button>
  );
}
