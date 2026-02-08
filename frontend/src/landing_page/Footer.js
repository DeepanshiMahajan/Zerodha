import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#fafafa",
        borderTop: "1px solid #e6e6e6",
      }}
    >
      <div className="container-fluid px-5 mt-5">
        {/* Top section */}
        <div className="row pt-4">
          <div className="col-md-3">
            <img
              src="media/images/logo.svg"
              alt="Zerodha logo"
              style={{ width: "140px", marginBottom: "12px" }}
            />
            <p style={{ fontSize: "13px", color: "#9b9b9b", lineHeight: "1.6" }}>
              © 2010 - 2024, Not Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
          </div>

          <div className="col-md-3">
            <p style={{ fontWeight: 600, color: "#424242" }}>Company</p>
            <p style={{ fontSize: "14px", color: "#666" }}>About</p>
            <p style={{ fontSize: "14px", color: "#666" }}>Products</p>
            <p style={{ fontSize: "14px", color: "#666" }}>Pricing</p>
            <p style={{ fontSize: "14px", color: "#666" }}>
              Referral programme
            </p>
            <p style={{ fontSize: "14px", color: "#666" }}>Careers</p>
            <p style={{ fontSize: "14px", color: "#666" }}>Zerodha.tech</p>
            <p style={{ fontSize: "14px", color: "#666" }}>Press & media</p>
            <p style={{ fontSize: "14px", color: "#666" }}>
              Zerodha cares (CSR)
            </p>
          </div>

          <div className="col-md-3">
            <p style={{ fontWeight: 600, color: "#424242" }}>Support</p>
            <p style={{ fontSize: "14px", color: "#666" }}>Contact</p>
            <p style={{ fontSize: "14px", color: "#666" }}>Support portal</p>
            <p style={{ fontSize: "14px", color: "#666" }}>
              Z-Connect blog
            </p>
            <p style={{ fontSize: "14px", color: "#666" }}>
              List of charges
            </p>
            <p style={{ fontSize: "14px", color: "#666" }}>
              Downloads & resources
            </p>
          </div>

          <div className="col-md-3">
            <p style={{ fontWeight: 600, color: "#424242" }}>Account</p>
            <p style={{ fontSize: "14px", color: "#666" }}>
              Open an account
            </p>
            <p style={{ fontSize: "14px", color: "#666" }}>
              Fund transfer
            </p>
            <p style={{ fontSize: "14px", color: "#666" }}>
              60 day challenge
            </p>
          </div>
        </div>

        {/* Bottom text */}
        <div
          style={{
            borderTop: "1px solid #e6e6e6",
            marginTop: "40px",
            paddingTop: "25px",
            fontSize: "13px",
            color: "#9b9b9b",
            lineHeight: "1.7",
          }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;