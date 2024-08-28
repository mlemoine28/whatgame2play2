import React from "react";
import GamingBackground from "../../assets/gamingbackground.png";
import TitleImage from "../../assets/WhatGame2Play_Header.png";
import styles from "./Header.module.css";
import ButtonHome from "../Button/ButtonHome";



function Header() {
  return (
    <div className={styles.headerstyle}>
      <ButtonHome className={styles.homebutton} label="WhatGame2Play"> </ButtonHome>
      <img src={TitleImage} alt="WhatGame2Play" />
    </div>
  );
}

export default Header;
