// import React from "react";

// function App() {
//   const handleLogout = () => {
//   localStorage.removeItem("token");
//   window.location.href = "http://localhost:3000/login";
// };


//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <div style={styles.header}>
//           <h2 style={styles.logo}>Trading Dashboard</h2>
//           <button style={styles.logoutBtn} onClick={handleLogout}>
//             Logout
//           </button>
//         </div>

//         <div style={styles.content}>
//           <h1 style={styles.title}>Welcome</h1>
//           <p style={styles.text}>
//             You are successfully logged in to your trading dashboard.
//           </p>

//           <div style={styles.boxContainer}>
//             <div style={styles.box}>
//               <h3>Portfolio</h3>
//               <p>Track your investments</p>
//             </div>

//             <div style={styles.box}>
//               <h3>Orders</h3>
//               <p>View your trades</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     minHeight: "100vh",
//     background: "linear-gradient(to right, #667eea, #764ba2)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   card: {
//     width: "80%",
//     maxWidth: "900px",
//     background: "#fff",
//     borderRadius: "12px",
//     padding: "30px",
//     boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
//   },
//   header: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: "30px",
//   },
//   logo: {
//     margin: 0,
//     color: "#667eea",
//   },
//   logoutBtn: {
//     padding: "8px 16px",
//     background: "#ff4d4f",
//     color: "#fff",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontWeight: "bold",
//   },
//   content: {
//     textAlign: "center",
//   },
//   title: {
//     marginBottom: "10px",
//   },
//   text: {
//     marginBottom: "30px",
//     color: "#555",
//   },
//   boxContainer: {
//     display: "flex",
//     justifyContent: "space-between",
//     gap: "15px",
//     flexWrap: "wrap",
//   },
//   box: {
//     flex: "1",
//     minWidth: "200px",
//     background: "#f5f7ff",
//     padding: "20px",
//     borderRadius: "10px",
//     boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
//   },
// };

// export default App;


import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faRobot, faChartPie, faBriefcase } from "@fortawesome/free-solid-svg-icons";

const initialApps = [
  { name: "Smallcase", description: "Invest in thematic portfolios", icon: faChartLine, connected: true },
  { name: "AlgoTrader", description: "Automated trading strategies", icon: faRobot, connected: false },
  { name: "MarketInsights", description: "Advanced market analytics", icon: faChartPie, connected: false },
  { name: "PortfolioManager", description: "Manage your holdings easily", icon: faBriefcase, connected: true },
];

const App = () => {
  const [apps, setApps] = useState(initialApps);

  const toggleConnection = (index) => {
    const updatedApps = [...apps];
    updatedApps[index].connected = !updatedApps[index].connected;
    setApps(updatedApps);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif", background: "#f5f6fa", minHeight: "100vh" }}>
      <h2 style={{ marginBottom: "20px", color: "#333" }}>Apps</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {apps.map((app, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "20px 30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <FontAwesomeIcon icon={app.icon} style={{ fontSize: "40px", marginRight: "20px", color: "#4b7bec" }} />
              <div>
                <h3 style={{ margin: 0, fontSize: "20px", color: "#111" }}>{app.name}</h3>
                <p style={{ margin: "5px 0 0", color: "#555", fontSize: "16px" }}>{app.description}</p>
              </div>
            </div>
            <button
              onClick={() => toggleConnection(index)}
              style={{
                padding: "10px 20px",
                backgroundColor: app.connected ? "#e84118" : "#44bd32",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              {app.connected ? "Disconnect" : "Connect"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
