import React from "react";
import GamingBackground from "../../assets/gamingbackground.png";
import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.headerstyle}>
      <h1> Welcome to WhatGame2Play</h1>
      <img src={GamingBackground} alt="Gaming Background Viewing Horizon" />
    </div>
  );
}

export default Header;
