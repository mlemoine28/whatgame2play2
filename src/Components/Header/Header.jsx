import React from "react";
import GamingBackground from "../../assets/gamingbackground.png";
import TitleImage from "../../assets/WhatGame2Play_Header.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.headerstyle}>
      <img src={TitleImage} alt="WhatGame2Play" />
    </div>
  );
}

export default Header;
