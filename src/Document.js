import React, { useEffect, useRef } from "react";
const container = {
  border: "1px solid Black",
  padding: "1rem",
  maxWidth: "500px",
  height: "500px",
  overflow: "auto",
};

const Document = ({ title = "", content = "" }) => {
  const contentRef = useRef();

  /**
   * Detect scroll and enable button on scroll end
   */
  const handleScroll = () => {
    if (
      contentRef.current.offsetHeight + contentRef.current.scrollTop >=
      contentRef.current.scrollHeight
    ) {
      const button = document.querySelector("button");
      button.removeAttribute("disabled");
    }
  };

  /**
   * listen to onScroll to call handleScroll function
   * also clear side effect
   */
  useEffect(() => {
    const container = contentRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <h1 className="title">{title}</h1>
      <div ref={contentRef} style={container}>
        <p className="content">{content}</p>
      </div>
      <button disabled>I Agree</button>
    </>
  );
};

export default Document;
