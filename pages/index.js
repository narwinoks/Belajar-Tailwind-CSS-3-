import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="max-w-lg">
      {/* <div className="overflow-hidden bg-white border shadow-sm rounded-xl">
        <header className="border-b px-4 oy-2.5 bg-gray-50 bg-opacity-50  items-center flex justify-between">
          <div>
            <h1 className="font-medium">Cart Title</h1>
            <span className="text-gray-500">
              Lorem Ipsum is simply dummy tex
            </span>
          </div>
          <a
            href=""
            className="px-5 py-2.5 hover:bg-pink-600 text-white bg-pink-500 rounded-xl font-semibold text-sm transition duration-500 focus:outline-none focus:ring focus:ring-pink-100"
          >
            New Task
          </a>
        </header>
        <section className="px-4 py-2.5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer
        </section>
        <footer className="border-t py-2.5 px-4  text-gray-500  bg-gray-100">
          of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer
        </footer>
      </div> */}

      <div className="space-x-2">
        <Button onClick={() => console.log("hallo dika")}>Simpan2</Button>
        <Button className="bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring focus:ring-pink-200">
          Simpan2
        </Button>
        {/* <button className="btn btn-primary">Primary</button> */}
        {/* <button className="btn btn-secondary">Primary</button> */}
      </div>
    </div>
  );
}
