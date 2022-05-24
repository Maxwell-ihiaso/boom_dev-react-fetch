import React, { useState } from "react";
const container = {
  border: "1px solid Black",
  padding: "1rem",
  maxWidth: "500px",
  height: "500px",
  overflow: "auto",
};

const Document = ({ title = "", content = "" }) => {
  const [isBottom, setIsBottom] = useState(false);

  /**
   * Detect scroll and enable button on scroll end
   */
  const handleScroll = (e) => {
    const scrollableDiv = e.target;
    if (
      scrollableDiv.offsetHeight + scrollableDiv.scrollTop >=
      scrollableDiv.scrollHeight
    ) {
      setIsBottom(true);
    }
  };

  return (
    <>
      <h1 className="title">{title}</h1>
      <div onScroll={(e) => handleScroll(e)} style={container}>
        <p className="content">{content}</p>
      </div>
      <button disabled={isBottom ? false : true}>I Agree</button>
    </>
  );
};

export default Document;
