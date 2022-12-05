import React from "react";

export default function Layout({ children }) {
  return (
    <div className=" flex bg-gray-100 items-center justify-center  min-h-screen antialiased font-sans tracking-tighter">
      {children}
    </div>
  );
}
