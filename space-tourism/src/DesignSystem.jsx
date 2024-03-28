import React, { Fragment } from "react";

const DesignSystem = () => {
  return (
    <Fragment>
      <div className="container bg-dark text-white">
        <h1> Design Component </h1>
        <div id="colors">
          <h2>
            <span>01</span>Colors
          </h2>

          <div className="boxes">
            <div className="long-box text-white">#0B0D17</div>
            <p>
              <span className="text-accent">RGB</span> 11, 13, 23
            </p>
            <p>
              <span className="text-accent">HSL</span> 230, 35%, 7%
            </p>
            <div className="long-box text-white bg-accent">#0B0D17</div>
            <p>
              <span className="text-accent">RGB</span> 208, 214, 249
            </p>
            <p>
              <span className="text-accent">HSL</span> 231, 77%, 90%
            </p>
            <div className="long-box text-dark bg-white">#FFFFF</div>
            <p>
              <span className="text-accent">RGB</span> 255, 255, 255
            </p>
            <p>
              <span className="text-accent">HSL</span> 0, 0%, 100%
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DesignSystem;
