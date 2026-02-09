import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://zerodha-backend-cjze.onrender.com/api/auth/login",
        form
      );

      localStorage.setItem("token", res.data.token);

      // redirect to dashboard app (port 3001)
      window.location.href = `https://zerodha-dashboard-srdg.onrender.com?token=${res.data.token}`;

    } catch (err) {
      alert(err.response?.data || "Login failed");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        <p style={styles.text}>
          New user?{" "}
          <Link to="/signup" style={styles.link}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f6fa", // soft gray background like Zerodha
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    background: "#fff",
    padding: "50px 40px",
    borderRadius: "12px",
    width: "350px",
    textAlign: "center",
    boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
    transition: "0.3s all ease-in-out",
  },
  cardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
  },
  logo: {
    marginBottom: "25px",
    width: "120px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#111",
    marginBottom: "25px",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none",
    transition: "0.2s border-color ease-in-out",
  },
  inputFocus: {
    borderColor: "#43e97b",
    boxShadow: "0 0 5px rgba(67, 233, 123, 0.3)",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#43e97b",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "15px",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "0.3s background ease-in-out",
  },
  buttonHover: {
    background: "#38d18a",
  },
  forgot: {
    marginTop: "15px",
    fontSize: "13px",
    color: "#888",
    cursor: "pointer",
  },
  signup: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#555",
  },
  link: {
    color: "#43e97b",
    textDecoration: "none",
    fontWeight: "bold",
    marginLeft: "5px",
  },
};

export default Login;
