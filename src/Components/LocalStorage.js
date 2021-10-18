import React from "react";
import header from "../assets/images/header.png";
// import { Link } from "react-router-dom";
import "./LocalStorage.css";
import videos from "../assets/images/videos.png";
import music from "../assets/images/music.png";
import gallery from "../assets/images/gallery.png";
import secret from "../assets/images/secret.png";

import ItemBrief from "./ItemBrief";
import MOCKDATA from "./mockData";
import Footer from "./Footer";

const LocalStorage = () => {
  const btnStyle = {
    background: "none",
    border: "none",
  };

  return (
    <div className="localstorage">
      <div className="header">
        <img src={header} alt="Local Storage" />
      </div>
      <div className="main">
        <h1>Local Storage</h1>
        <div className="search">
          <input class="search-bar" type="text" placeholder="&#xf002; Search"></input>
        </div>
        <div className="btn-category">
          <button style={btnStyle}>
            <img src={videos} alt="enter" />
            <p>Videos</p>
          </button>
          <button style={btnStyle}>
            <img src={music} alt="enter" />
            <p>Music</p>
          </button>
          <button style={btnStyle}>
            <img src={gallery} alt="enter" />
            <p>Images</p>
          </button>
          <button style={btnStyle}>
            <img src={secret} alt="enter" />
            <p>Archive</p>
          </button>
        </div>
        <div className="item-list">
          {MOCKDATA.map((item) => (
            <ItemBrief
              title={item.title}
              mimetype={item.mimetype}
              size={item.size}
            />
          ))}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LocalStorage;
