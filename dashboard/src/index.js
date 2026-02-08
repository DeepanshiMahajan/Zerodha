import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";

// get token from URL
const params = new URLSearchParams(window.location.search);
const tokenFromURL = params.get("token");

// store token if received from login
if (tokenFromURL) {
  localStorage.setItem("token", tokenFromURL);
  window.history.replaceState({}, document.title, "/");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
