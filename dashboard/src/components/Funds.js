import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Funds = () => {
  const [funds, setFunds] = useState(null);

  useEffect(() => {
    axios
      .get("https://zerodha-backend-cjze.onrender.com/funds")
      .then((res) => {
        setFunds(res.data);
      })
      .catch((err) => {
        console.log("Error fetching funds:", err);
      });
  }, []);

  if (!funds) {
    return <p>Loading funds...</p>;
  }

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
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">{funds.availableMargin}</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">{funds.usedMargin}</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">{funds.availableCash}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
