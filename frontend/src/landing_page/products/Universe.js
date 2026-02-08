import React from "react";

function Universe() {
  const logoStyle = {
    width: "160px",
    objectFit: "contain",
  };

  const tallLogoStyle = {
    height: "45px",
    objectFit: "contain",
  };

  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            style={logoStyle}
          />
          <p className="text-muted">Thematic investment platform</p>
        </div>

       
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            style={tallLogoStyle}
          />
          <p className="text-muted">Algo & strategy platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            style={logoStyle}
          />
          <p className="text-muted">Options trading platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            style={logoStyle}
          />
          <p className="text-muted">Asset management</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/goldenpiLogo.png"
            alt="GoldenPi"
            style={logoStyle}
          />
          <p className="text-muted">Bonds trading platform</p>
        </div>

        
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            style={tallLogoStyle}
          />
          <p className="text-muted">Insurance</p>
        </div>

        <button
          className="btn btn-primary fs-5 mb-5 mt-4"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
