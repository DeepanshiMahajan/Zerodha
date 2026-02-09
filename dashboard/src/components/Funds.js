import React from "react";
import { Link } from "react-router-dom";
import "./Funds.css";

const Funds = () => {
  // Hardcoded fund values
  const funds = {
    availableMargin: 5000,
    usedMargin: 2000,
    availableCash: 3000,
    openingBalance: 10000,
    payin: 0,
    span: 0,
    deliveryMargin: 0,
    exposure: 0,
    optionsPremium: 0,
    collateralLiquid: 0,
    collateralEquity: 0,
    totalCollateral: 0,
  };

  return (
    <div className="funds-container">
      {/* Header with Add / Withdraw */}
      <div className="funds-header">
        <p>Instant, zero-cost fund transfers with UPI</p>
        <Link to="/add-funds" className="btn btn-green">
          Add funds
        </Link>
        <Link to="/withdraw" className="btn btn-blue">
          Withdraw
        </Link>
      </div>

      {/* Equity Funds Table */}
      <div className="funds-table">
        <h2>Equity Funds</h2>

        <div className="funds-row">
          <div className="funds-col">
            <div className="data">
              <p>Available Margin:</p>
              <p className="imp colored">{funds.availableMargin}</p>
            </div>
            <div className="data">
              <p>Used Margin:</p>
              <p className="imp">{funds.usedMargin}</p>
            </div>
            <div className="data">
              <p>Available Cash:</p>
              <p className="imp">{funds.availableCash}</p>
            </div>
            <div className="data">
              <p>Opening Balance:</p>
              <p className="imp">{funds.openingBalance}</p>
            </div>
            <div className="data">
              <p>Payin:</p>
              <p className="imp">{funds.payin}</p>
            </div>

            <div className="data">
              <p>SPAN:</p>
              <p className="imp">{funds.span}</p>
            </div>
            <div className="data">
              <p>Delivery Margin:</p>
              <p className="imp">{funds.deliveryMargin}</p>
            </div>
            <div className="data">
              <p>Exposure:</p>
              <p className="imp">{funds.exposure}</p>
            </div>
            <div className="data">
              <p>Options Premium:</p>
              <p className="imp">{funds.optionsPremium}</p>
            </div>

            <div className="data">
              <p>Collateral (Liquid funds):</p>
              <p className="imp">{funds.collateralLiquid}</p>
            </div>
            <div className="data">
              <p>Collateral (Equity):</p>
              <p className="imp">{funds.collateralEquity}</p>
            </div>
            <div className="data">
              <p>Total Collateral:</p>
              <p className="imp">{funds.totalCollateral}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Open Account */}
      <div className="funds-footer">
        <p>You don't have a commodity account</p>
        <Link to="/open-account" className="btn btn-blue">
          Open Account
        </Link>
      </div>
    </div>
  );
};

export default Funds;
