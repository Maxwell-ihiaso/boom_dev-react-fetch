import { useEffect, useState } from "react/cjs/react.development";
import "./App.css";
import Document from "./Document";

function App() {
  const [content, setContent] = useState("");

  useEffect(() => {
    const url = `https://jaspervdj.be/lorem-markdownum/markdown.txt`;
    fetch(url)
      .then((response) => response.text())
      .then((data) => setContent(data));
  }, []);

  return (
    <div className="App">
      <section className="hero">
        <div className="hero-body">
          <Document content={content} />
          <button disabled>I Agree</button>
        </div>
      </section>
    </div>
  );
}

export default App;
