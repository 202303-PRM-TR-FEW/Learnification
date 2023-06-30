import React from "react";

const TitleAndParagraph = () => {
  const style = {
    header: "font-bold",
  };
  return (
    <div>
      <h1 className={style.header}>Discover passion</h1>
      <p>
        Find out what topics you find interesting, learn a new skill & connect
        with people that are passionate about similar topics.
      </p>
    </div>
  );
};

export default TitleAndParagraph;
