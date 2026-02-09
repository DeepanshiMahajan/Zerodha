import React, { useEffect } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

function Home() {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "http://localhost:3000/login";
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