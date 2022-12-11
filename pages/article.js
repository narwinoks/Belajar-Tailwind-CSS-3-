import App from "../layouts/app";
import React, { useEffect }  from "react";
import Hero from "../components/Hero";

export default function Article() {
  const posts = [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, ipsum!",
      created_at: "12/10/2022",
      author: "winarnpo",
      picture: "",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, ipsum!",
      created_at: "12/10/2022",
      author: "winarnpo",
      picture: "",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, ipsum!",
      created_at: "12/10/2022",
      author: "winarnpo",
      picture: "",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, ipsum!",
      created_at: "12/10/2022",
      author: "winarnpo",
      picture: "",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, ipsum!",
      created_at: "12/10/2022",
      author: "winarnpo",
      picture: "",
    },
  ];
  return (
    <>
      <Hero>
        <header className="text-white sm:py-8 py-4 md:py-16">
          <h1 className="text-xl md:text-3xl font-bold">Our Article</h1>
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
        </header>
      </Hero>
      <div className="container">Articles</div>
      {/* {posts} */}
      {posts.map((x, index) => {
        <div key={index}>
          <img src={x.picture} alt="" srcset="" />
          <h1>{x.title}</h1>
          <div className="flex items-center justify-between text-sm to-gray-500">
            <span>{x.author}</span>
            <span>{x     .created_at}</span>
          </div>
        </div>;
      })}
    </>
  );
}

// export default Article;
Article.getLayout = (page) => <App children={page}></App>;
