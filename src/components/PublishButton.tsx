import React from "react";
import buildSite from "../hooks/buildSite";

const style = {
  width: "6rem",
  height: "3rem",
  borderRadius: "0.25rem",
  padding: "0.5rem",
  border: "none",
};

const PublishButton: React.FC = () => {
  return <button style={style} onClick={() => buildSite()}>Publish</button>;
};

export default PublishButton;
