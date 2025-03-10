import React from "react";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <section id="works">
      <div className="subtitle">
        <span>Works</span>
      </div>
      <div className="works-container">
        <div className="works-text">
          <ul>
            <li><Link to="/Digital"> Digital filters and convolutional neural network</Link></li>
            <li><Link to="/Differential"> Differential phase analysis</Link></li>
            <li><Link to="/shikoku"> Covariance matrix analysis for seismic and volcanic zones</Link></li>
            <li><Link to="/kernels"> Sensitivity kernels and Monte Carlo simulation </Link></li>
            <li><Link to="/aquifer"> Aquifer modeling and seismic velocity changes </Link></li>
          </ul>
        </div>
        <div className="works-image">
          <img
            src="/images/works/Digital_2.jpg"
            alt="Works_im"
            style={{
              width: "600px", // Set only width (or height)
              height: "auto", // Let the browser calculate height based on aspect ratio
            }}
            className="cover-im"
          />
        </div>
      </div>
    </section>
  );
};

export default Works;