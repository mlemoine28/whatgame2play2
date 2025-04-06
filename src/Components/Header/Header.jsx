import React from "react";
import GamingBackground from "../../assets/gamingbackground.png";
import TitleImage from "../../assets/WhatGame2Play_Header.png";
import styles from "./Header.module.css";
import ButtonHome from "../Button/ButtonHome";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PopupLogin from "../PopupLogin/PopupLogin";
import NavItem from "../NavBar/NavItem";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const active = location.pathname;

  const backToHomeClick = () => {
    navigate("/");
  };

  const profileButtonClick = () => {
    navigate("/profile");
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttoncontainer}>
        <PopupLogin />
        <div
          className={`${styles.NavBarPointer} ${
            active === "/profile" ? styles.active : ""
          }`}
        >
          <NavItem label="Profile" handleClick={profileButtonClick} />
        </div>
      </div>
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
