import React, { useState } from "react";
const container = {
  border: "1px solid Black",
  padding: "1rem",
  maxWidth: "500px",
  height: "500px",
  overflow: "auto",
};

const Document = ({ title = "", content = "" }) => {
  const [isDisasbled, setIsDisabled] = useState(true);

  /**
   * Detect scroll and enable button on scroll end
   */
  const handleScroll = (e) => {
    const scrollableDiv = e.target;
    if (
      scrollableDiv.offsetHeight + scrollableDiv.scrollTop >=
      scrollableDiv.scrollHeight
    ) {
      setIsDisabled(false);
    }
  };

  return (
    <div className="content">
      <h1 className="title">{title}</h1>
      <div onScroll={(e) => handleScroll(e)} style={container}>
        <p>{content}</p>
      </div>
      <button disabled={isDisasbled}>I Agree</button>
    </div>
  );
};

export default Document;
