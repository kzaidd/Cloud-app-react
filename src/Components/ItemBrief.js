import React from "react";
import "./ItemBrief.css";
import gallery_mid from "../assets/images/gallery_mid.png";
import archive_mid from "../assets/images/archive_mid.png";
import music_mid from "../assets/images/music_mid.png";

const ItemBrief = ({ title, mimetype, size }) => {
  return (
    <div className="item-brief">
      <div className="item-brief__image">
        {mimetype === "jpg" && <img src={gallery_mid} />}
        {mimetype === "mp3" && <img src={music_mid} />}
        {mimetype === "zip" && <img src={archive_mid} />}
      </div>
      <div className="item-brief__content">
        <div className="item-brief__title">
          <h3 class="h3_title">{title}</h3>
        </div>
        <div className="item-brief__info">
          <p className="item-brief__info--mime">{mimetype} &#8226; </p>
          <p className="item-brief__info--size">{size}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemBrief;
