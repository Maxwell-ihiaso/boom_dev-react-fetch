import React from "react";
const container = {
  border: "1px solid Black",
  padding: "1rem",
  maxWidth: "500px",
  height: "500px",
  overflow: "auto",
};

const Document = React.forwardRef(
  ({ title = "Terms and Conditions", content = "" }, ref) => {
    return (
      <>
        <h1 className="title">{title}</h1>
        <div ref={ref} style={container}>
          <p className="content">{content}</p>
        </div>
        <button disabled>I Agree</button>
      </>
    );
  }
);

export default Document;
