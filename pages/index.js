// import App from "next/app";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";
import App from "../layouts/app";
import Hero from "../components/Hero";
// import Head from "../components/H";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <div className="mb-6 min-h-screen flex items-center justify-center">
        <div className="w-1/2">
          <h1 className="font-semibold text-2xl">Tailwind css</h1>
          <article className="text-lg">
            <p className="font-display mb-10 leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum ipsam quas harum exercitationem hic, ex corrupti
              blanditiis quia? Laboriosam, quisquam.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              impedit magni quaerat explicabo amet nihil cumque sapiente sunt
              commodi officiis.
            </p>
          </article>
        </div>
      </div>
    </>
  );
}

Home.getLayout = (page) => <App title="Tailwind" children={page} />;
