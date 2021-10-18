import React from "react";
import header from "../assets/images/header.png";
import Footer from "./Footer";
import kite from "../assets/images/kite.png";
import "./Notification.css";

const Notifications = () => {
  return (
    <div className="notifications">
      <div className="header">
        <img src={header} alt="" />
      </div>
      <div className="main">
        <h1>Notifications</h1>
        <div className="notification-img">
          <img src={kite} alt="" />
        </div>
        <div className="notification-item">
          <h2>No notifications yet</h2>
          <p>
            Here you will see the external changes
            <br />
            in your shared folders,tags from your
            <br />
            peers and other updates
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Notifications;
