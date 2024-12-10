import React from "react";
import GamingBackground from "../../assets/gamingbackground.png";
import TitleImage from "../../assets/WhatGame2Play_Header.png";
import styles from "./Header.module.css";
import ButtonHome from "../Button/ButtonHome";
import { useState } from "react";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.headerstyle}>
        <img src={TitleImage} alt="WhatGame2Play" />
      </div>
    </div>
  );
}

export default Header;
