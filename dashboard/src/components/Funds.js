import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Funds.css";

const Funds = () => {
  const [funds, setFunds] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://zerodha-backend-cjze.onrender.com/funds")
      .then((res) => {
        console.log("Funds data:", res.data); // DEBUG: check if data arrives
        setFunds(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching funds:", err);
        setError("Unable to load funds. Please try again.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading funds...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI</p>
        <Link to="/add-funds" className="btn btn-green">
          Add funds
        </Link>
        <Link to="/withdraw" className="btn btn-blue">
          Withdraw
        </Link>
      </div>

      <div className="row">
        <div className="col">
          <h2>Equity Funds</h2>
          <div className="table">
            <div className="data">
              <p>Available margin:</p>
              <p className="imp colored">{funds.availableMargin}</p>
            </div>
            <div className="data">
              <p>Used margin:</p>
              <p className="imp">{funds.usedMargin}</p>
            </div>
            <div className="data">
              <p>Available cash:</p>
              <p className="imp">{funds.availableCash}</p>
            </div>
            <div className="data">
              <p>Opening balance:</p>
              <p className="imp">{funds.openingBalance}</p>
            </div>
            <div className="data">
              <p>Payin:</p>
              <p className="imp">{funds.payin}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
