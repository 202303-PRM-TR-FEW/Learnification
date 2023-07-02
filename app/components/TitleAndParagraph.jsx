import React from "react";

const TitleAndParagraph = () => {
  const style = {
    header: "font-bold",
  };
  return (
    <div className="py-6 pl-8 pr-[0.5rem]">
      <h1 className="text-2xl font-semibold">Discover passion</h1>
      <p>
        Find out what topics you find interesting, learn a new skill & connect
        with people that are passionate about similar topics.
      </p>
    </div>
  );
};

export default TitleAndParagraph;