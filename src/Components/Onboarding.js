import React from "react";
import onboarding from "../assets/images/onboarding.png";
import enter from "../assets/images/icons_tab bar_stats.png";
import { Link } from "react-router-dom";
import "./Onboarding.css";

const Onboarding = () => {
  const btnStyle = {
    background: "none",
    border: "none",
  };

  // THIS PAGE IS MADE ACCORDING TO THE DIMENSIONS OF IPHONE X

  return (
    <div className="container">
      <div className="bg">
        <img src={onboarding} alt="Onboard" />
        {/* DEMO IMAGE USED FOR ONBOARDING PAGE */}
        <p>
          Your cloud storage <br /> safe and sound
        </p>
        <Link to="/home">
          <button className="btn" style={btnStyle}>
            <img src={enter} alt="enter" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Onboarding;
