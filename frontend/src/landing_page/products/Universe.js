import React from "react";


function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <div className="universe-img-container">
            <img src="media/images/smallcaseLogo.png" className="universe-img" />
          </div>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <div className="universe-img-container">
            <img src="media/images/streakLogo.png" className="universe-img" />
          </div>
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <div className="universe-img-container">
            <img src="media/images/sensibullLogo.svg" className="universe-img" />
          </div>
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <div className="universe-img-container">
            <img src="media/images/zerodhaFundhouse.png" className="universe-img" />
          </div>
          <p className="text-small text-muted">Asset Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <div className="universe-img-container">
            <img src="https://zerodha.com/static/images/partners/tijori.svg" className="universe-img" />
          </div>
          <p className="text-small text-muted">Fundamental Research platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <div className="universe-img-container">
            <img src="https://zerodha.com/static/images/products/ditto-logo.png" className="universe-img" />
          </div>
          <p className="text-small text-muted">Insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
