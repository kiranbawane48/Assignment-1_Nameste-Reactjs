import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", { id: "heading" }, "Hello world from React");
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(heading);
