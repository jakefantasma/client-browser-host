import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { UseData } from "./Api";
import App from "./App";
import Test from "./Test";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UseData>
      <Test />
    </UseData>
  </React.StrictMode>
);
