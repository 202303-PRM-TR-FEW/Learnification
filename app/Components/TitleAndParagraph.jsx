import React from "react";

const TitleAndParagraph = () => {
  const style = {
    header: "font-bold text-3xl sm:text-6xl my-8",
  };
  return (
    <div>
      <h1 className={style.header}>Discover passion</h1>
      <p className="my-8 sm:text-xl max-w-[40ch]">
        Find out what topics you find interesting, learn a new skill & connect
        with people that are passionate about similar topics.
      </p>
    </div>
  );
};

export default TitleAndParagraph;
