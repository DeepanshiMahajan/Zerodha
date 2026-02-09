import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Funds.css";

const BACKEND_URL = "https://zerodha-backend-cjze.onrender.com";

const Funds = () => {
  const [funds, setFunds] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFunds = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/funds`, {
          withCredentials: true, // send cookies if backend requires auth
        });

        console.log("Funds data:", res.data); // debug log
        setFunds(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching funds:", err);
        setError(
          err.response?.status === 401
            ? "Please log in to view your funds."
            : "Unable to load funds. Please try again."
        );
        setLoading(false);
      }
    };

    fetchFunds();
  }, []);

  if (loading) return <p>Loading funds...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!funds) return <p>No funds data available.</p>;

  return (
    <div className="funds-container">
      <div className="funds-header">
        <p>Instant, zero-cost fund transfers with UPI</p>
        <Link to="/add-funds" className="btn btn-green">
          Add funds
        </Link>
        <Link to="/withdraw" className="btn btn-blue">
          Withdraw
        </Link>
      </div>

      <div className="funds-table">
        <h2>Equity Funds</h2>
        <div className="funds-row">
          <div className="funds-col">
            <div className="data">
              <p>Available Margin:</p>
              <p className="imp colored">{funds.availableMargin ?? 0}</p>
            </div>
            <div className="data">
              <p>Used Margin:</p>
              <p className="imp">{funds.usedMargin ?? 0}</p>
            </div>
            <div className="data">
              <p>Available Cash:</p>
              <p className="imp">{funds.availableCash ?? 0}</p>
            </div>
            <div className="data">
              <p>Opening Balance:</p>
              <p className="imp">{funds.openingBalance ?? 0}</p>
            </div>
            <div className="data">
              <p>Payin:</p>
              <p className="imp">{funds.payin ?? 0}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
