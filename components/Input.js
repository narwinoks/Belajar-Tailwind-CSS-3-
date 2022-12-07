import React from "react";

export default function Input({ type = "text", ...props }) {
  //   return <input {...props} />;
  return (
    <input
      type={type}
      {...props}
      className="w-full rounded-xl border-gray-300 shadow-sm focus:ring focus:ring-indigo-100 focus:border-indigo-400 transition duration-200"
    />
  );
}
