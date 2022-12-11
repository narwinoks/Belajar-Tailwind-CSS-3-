import Head from "next/head";
import React from "react";
import AplicationLogo from "../components/AplicationLogo";

export default function Guest({ header, cardClassName, title, children }) {
  return (
    <div className=" md:min-h-screen  antialiased tracking-tighter text-gray-800  flex items-center justify-center md:bg-gray-100">
      <Head>
        <title>{title}</title>
      </Head>
      <div
        className={`${
          cardClassName ? cardClassName : "lg:w-1/3"
        } w-full md:w-1/2 `}
      >
        <AplicationLogo />
        <div className="bg-white  md:rounded-2xl md:shadow-sm overflow-hidden md:border ">
          <div className="px-6 py-3 border-b  bg-gray-50/50">
            <h1 className="font-medium capitalize">{header}</h1>
          </div>
          <div className="p-6 py-3 pt-3 pb-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
