import React from "react";
import GamingBackground from "../../assets/gamingbackground.png";
import TitleImage from "../../assets/WhatGame2Play_Header.png";
import styles from "./Header.module.css";
import ButtonHome from "../Button/ButtonHome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopupLogin from "../PopupLogin/PopupLogin";

function Header() {
  const navigate = useNavigate();
  const backToHomeClick = () => {
    navigate("/whatgame2play2");
  };
  return (
    <div className={styles.container}>
      <PopupLogin />
      <div className={styles.headerstyle}>
        <img
        className={styles.img}
          src={TitleImage}
          alt="WhatGame2Play"
          onClick={backToHomeClick}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default Header;
