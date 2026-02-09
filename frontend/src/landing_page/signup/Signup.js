import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Note: backend port 3002 and route /api/auth/signup
      await axios.post("https://zerodha-backend-1rte.onrender.com/api/auth/signup", form);
      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            style={styles.input}
          />
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
            Sign Up
          </button>
        </form>
        <p style={styles.text}>
          Already have an account?{" "}
          <Link to="/login" style={styles.link}>
            Login
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
    background: "#f5f6fa", // Zerodha-style green gradient
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    background: "#fff",
    padding: "50px 40px",
    borderRadius: "12px",
    width: "360px",
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
    transition: "0.2s border-color ease-in-out, 0.2s box-shadow ease-in-out",
  },
  inputFocus: {
    borderColor: "#43e97b",
    boxShadow: "0 0 5px rgba(67, 233, 123, 0.3)",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#4372e9",
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
  text: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#555",
  },
  link: {
    color: "#251e61",
    textDecoration: "none",
    fontWeight: "bold",
    marginLeft: "5px",
  },
};


export default Signup;
