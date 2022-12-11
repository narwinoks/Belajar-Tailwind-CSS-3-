import React from "react";

export default function AplicationLogo() {
  return (
    <a href="/" className="inline-flex items-center justify-center mb-5 gap-2">
      <div className="flex items-center">
        {/* prettier-ignore */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-500">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
      </div>
      <h1 className="text-2xl font-semibold tracking-tighter">
        <span className="text-indigo-300">
          DES <span className="text-black">BER</span>
        </span>
      </h1>
    </a>
  );
}
