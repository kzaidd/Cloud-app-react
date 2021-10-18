import React from "react";
import profilePage from "../assets/images/profilePage.png";
import Footer from "./Footer";
import "./profile.css";

const Profile = () => {
  const btnStyle = {
    background: "none",
    border: "none",
  };

  return (
    <div className="container">
      <div id="profile">
        <img src={profilePage} alt="" />
        {/* DEMO IMAGE USED FOR PROFILE */}
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Profile;
