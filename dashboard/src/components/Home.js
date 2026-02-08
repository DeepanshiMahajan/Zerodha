import React, { useEffect } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

function Home() {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "https://zerodha-frontend-oh5v.onrender.com/login";
    }
  }, []);
    return (
        <>
        <TopBar />
        <Dashboard />
        </>
    );
};

export default Home;