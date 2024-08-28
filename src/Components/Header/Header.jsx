import React from "react";
import GamingBackground from "../../assets/gamingbackground.png";
import TitleImage from "../../assets/WhatGame2Play_Header.png";
import styles from "./Header.module.css";
import Button2 from "../Button/Button2";


function Header() {
  return (
    <div className={styles.headerstyle}>
      <Button2 label="Home"> </Button2>
      <img src={TitleImage} alt="WhatGame2Play" />
    </div>
  );
}

export default Header;
