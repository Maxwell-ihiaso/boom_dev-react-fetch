import { useEffect, useState, useRef } from "react/cjs/react.development";

import "./App.css";
import Document from "./Document";

function App() {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  /**
   * fetch Data from API
   */
  useEffect(() => {
    const url = `https://jaspervdj.be/lorem-markdownum/markdown.txt`;
    fetch(url)
      .then((response) => response.text())
      .then((data) => setContent(data));
  }, []);

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
   * listen to scroll to call handleScroll function
   * also clear side effect
   */
  useEffect(() => {
    const container = contentRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Document ref={contentRef} content={content} />
      <button disabled>I Agree</button>
    </div>
  );
}

export default App;
