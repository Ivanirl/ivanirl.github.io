import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./indexStyles/Oriflae.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Add a small loading-class handshake so CSS can animate a smooth fade-in
const setLoaded = () => {
  document.documentElement.classList.remove("is-loading");
  document.documentElement.classList.add("is-loaded");
};

document.documentElement.classList.add("is-loading");
if (document.readyState === "complete") {
  setLoaded();
} else {
  window.addEventListener("load", setLoaded, { once: true });
}

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
