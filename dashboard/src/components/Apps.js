import React from "react";

function App() {
  const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "https://zerodha-frontend-oh5v.onrender.com/login";
};


  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.logo}>Trading Dashboard</h2>
          <button style={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div style={styles.content}>
          <h1 style={styles.title}>Welcome</h1>
          <p style={styles.text}>
            You are successfully logged in to your trading dashboard.
          </p>

          <div style={styles.boxContainer}>
            <div style={styles.box}>
              <h3>Portfolio</h3>
              <p>Track your investments</p>
            </div>

            <div style={styles.box}>
              <h3>Orders</h3>
              <p>View your trades</p>
            </div>

            <div style={styles.box}>
              <h3>Funds</h3>
              <p>Manage your balance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "80%",
    maxWidth: "900px",
    background: "#fff",
    borderRadius: "12px",
    padding: "30px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },
  logo: {
    margin: 0,
    color: "#667eea",
  },
  logoutBtn: {
    padding: "8px 16px",
    background: "#ff4d4f",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  content: {
    textAlign: "center",
  },
  title: {
    marginBottom: "10px",
  },
  text: {
    marginBottom: "30px",
    color: "#555",
  },
  boxContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "15px",
    flexWrap: "wrap",
  },
  box: {
    flex: "1",
    minWidth: "200px",
    background: "#f5f7ff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },
};

export default App;
