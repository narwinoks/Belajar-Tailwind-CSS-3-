// import App from "next/app";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";
import App from "../layouts/app";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
// import Head from "../components/H";

export default function Home() {
  return (
    <>
      <Hero>
        <header className="text-white sm:py-8 py-4 md:py-16">
          <h1 className="text-xl md:text-3xl font-bold">New Revolution</h1>
          <p className="text-base md:text-xl leading-relaxed font-light mt-4 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <a
              href="#"
              className="underline decoration-sky-500 text-sky-400 font-medium"
            >
              Dolorem quam
            </a>
            , recusandae quis dolorum veritatis nulla, nemo consequuntur
            temporibus quisquam expedita libero est facere ipsum laboriosam
            eveniet itaque. Rem, dicta temporibus?
          </p>
          <a
            href="#"
            className="bg-white px-4 py-2 text-sm text-gray-900 md:px-6 md:py-2.5 rounded-xl  font-medium inline-flex shadow-inner hover:bg-gray-50 hover:text-blue-200 transition duration-200 md:shadow-gray-400"
          >
            Browse
          </a>
        </header>
      </Hero>
      <div>
        <p>article</p>
      </div>
    </>
  );
}

Home.getLayout = (page) => <App title="Tailwind" children={page} />;
