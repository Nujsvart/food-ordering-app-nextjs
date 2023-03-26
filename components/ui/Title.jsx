import React from "react";

const Title = ({ children, className }) => {
  return <h1 className={`${className} font-dancing font-bold`}>{children}</h1>;
};

export default Title;
