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
      <div ref={ref} style={container}>
        <h1 className="title">{title}</h1>
        <p className="content">{content}</p>
      </div>
    );
  }
);

export default Document;
