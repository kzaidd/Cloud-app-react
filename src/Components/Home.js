import React from "react";
import homepage from "../assets/images/homepage.png";
import Footer from "./Footer";
import "./Home.css";

const Home = () => {
  // const btnStyle = {
  //   background: "none",
  //   border: "none",
  // };

  return (
    <div className="container">
      <div id="home">
        <img src={homepage} alt="Home-page" />
        {/* DEMO IMAGE USED FOR HOME PAGE */}
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
