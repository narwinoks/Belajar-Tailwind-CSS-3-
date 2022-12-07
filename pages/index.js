// import App from "next/app";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";
import App from "../layouts/app";

export default function Home() {
  return (
    <div className="bg-red-500 min-h-screen flex items-center justify-center">
      <div className="">Tailwind css</div>
      {/* <div className="bg-rose-500 w-full aspect-video flex items-center justify-center text-white">
        Tailwind css
      </div>
      <div className="bg-rose-500 w-full aspect-video flex items-center justify-center text-white">
        Tailwind css
      </div> */}
    </div>
  );
}

Home.getLayout = (page) => <App children={page} />;
