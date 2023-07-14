import React from "react";
import ReactDOM from "react-dom/client";
import Search from "./components/Search";
import Header from "./components/Header";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    {/* <Search /> */}
  </React.StrictMode>,
);
