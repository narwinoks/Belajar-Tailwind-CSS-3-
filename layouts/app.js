import React from "react";
import Head from "next/head";

export default function App({ title = "Next", children }) {
  return (
    <div className="min-h-screen  text-gray-800">
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
}
