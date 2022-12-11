import React from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import AplicationLogo from "../components/AplicationLogo";

export default function App({ title = "Next", children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      {/* <Hero></Hero> */}
      <div>{children}</div>
      <footer className="mt-8  border-t">
        <div className="container">
          <div className="text-center pt-8">
            <AplicationLogo />
          </div>
          <div className="flex justify-center py-8 -mb-4">
            <div className="max-w-lg w-full py-8 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              nemo eveniet nulla, itaque assumenda aperiam quaerat ullam dicta
              perferendis vitae earum minima iste reiciendis cumque? Velit,
              dignissimos excepturi aspernatur repellat aliquam rem odio quaerat
              voluptatibus molestiae laboriosam labore ad distinctio vero
              impedit id sunt vel eaque expedita delectus quod? Aut!
            </div>
          </div>
        </div>
        <div className="bg-gray-100 py-4  border-gra">
          <div className="container">Copy Right</div>
        </div>
      </footer>
    </div>
  );
}
