import { useEffect, useRef } from "react/cjs/react.development";

const container = {
  border: "1px solid Black",
  padding: "1rem",
  maxWidth: "500px",
  height: "500px",
  overflow: "auto",
};

const Document = ({ title = "Terms and Conditions", content = "" }) => {
  const contentRef = useRef();

  const handleScroll = () => {
    if (
      contentRef.current.offsetHeight + contentRef.current.scrollTop >=
      contentRef.current.scrollHeight
    ) {
      const button = document.querySelector("button");
      button.removeAttribute("disabled");
    }
  };

  useEffect(() => {
    const container = contentRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={contentRef} style={container}>
      <h1 className="title">{title}</h1>
      <p className="content">{content}</p>
    </div>
  );
};

export default Document;
