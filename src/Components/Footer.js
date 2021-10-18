import React, { useState } from "react";
import home from "../assets/images/home.png";
import localstor_btn from "../assets/images/localstor_btn.png";
import actions from "../assets/images/actions.png";
import notification from "../assets/images/notification.png";
import profile from "../assets/images/profile.png";
import cancel from "../assets/images/cancel.png";
import scan from "../assets/images/scan.png";
import photo from "../assets/images/capture.png";
import upload from "../assets/images/upload.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [toggle, setToggle] = useState(false); //

  const btnStyle = {
    background: "none",
    border: "none",
  };

  return (
    <div className={toggle ? "greyClass footer" : "footer"}>
      {!toggle && (
        <>
          <Link to="/home">
            <button style={btnStyle}>
              <img src={home} alt="enter" />
            </button>
          </Link>
          <Link to="/localstorage">
            <button className="nav-btn" style={btnStyle}>
              <img src={localstor_btn} alt="enter" />
            </button>
          </Link>
        </>
      )}
      <div>
        {toggle && (
          // this works only if toggle state is true
          <>
            <button
              id="trigger"
              style={btnStyle}
              onClick={() => setToggle(false)}
            >
              <img src={cancel} alt="enter" />
            </button>
            <button id="trigger" style={btnStyle}>
              <img src={scan} alt="enter" />
            </button>
            <button id="trigger" style={btnStyle}>
              <img src={photo} alt="enter" />
            </button>
            <button id="trigger" style={btnStyle}>
              <img src={upload} alt="enter" />
            </button>
          </>
        )}
        <button id="actions" style={btnStyle} onClick={() => setToggle(true)}>
          <img src={actions} alt="enter" />
        </button>
      </div>
      {!toggle && (
        <>
          <Link to="/notifications">
            <button className="nav-btn" style={btnStyle}>
              <img src={notification} alt="enter" />
            </button>
          </Link>
          <Link to="/profile">
            <button className="nav-btn" style={btnStyle}>
              <img src={profile} alt="enter" />
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Footer;
