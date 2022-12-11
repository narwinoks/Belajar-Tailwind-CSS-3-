import React from "react";

const Title = ({ children }) => {
  <h1 className="text-xl md:text-3xl font-bold">{children}</h1>;
  // console.log(children, "oke1");
};
const Body = ({ children }) => {
  // console.log(children, "oke2");
  <div>{children}</div>;
};

const Hero2 = ({ children }) => {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
};

// console.log(children);
Hero2.Title = Title;
// console.log(Hero);
Hero2.Body = Body;
export default Hero2;
