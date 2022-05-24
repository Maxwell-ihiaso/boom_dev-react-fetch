import { useEffect, useState } from "react/cjs/react.development";

import "./App.css";
import Document from "./Document";

function App() {
  const [content, setContent] = useState("");

  /**
   * fetch Data from API
   */
  useEffect(() => {
    const url = `https://jaspervdj.be/lorem-markdownum/markdown.txt`;
    fetch(url)
      .then((response) => response.text())
      .then((data) => setContent(data));
  }, []);

  return (
    <div className="App">
      <Document title="Terms and Conditions" content={content} />
    </div>
  );
}

export default App;
