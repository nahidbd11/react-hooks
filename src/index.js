import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ContextComp from "./context/ContextComp";

ReactDOM.render(
  <React.StrictMode>
    <ContextComp>
      <App />
    </ContextComp>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
