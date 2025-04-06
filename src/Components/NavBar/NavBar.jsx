import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import PopupLogin from "../PopupLogin/PopupLogin";
import ButtonIntro from "../Button/ButtonIntro";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import NavItem from "./NavItem";

function NavBarTop() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("Location state in PlaylistPage:", location.state);

  const handleNavClick = (path) => () => {
    navigate(path);
  };

  const active = location.pathname;

  return (
    <div className={styles.container}>
      <div className={styles.navBarStyle}>
        <div className={styles.buttonContainer}>
          <div
            className={`${styles.NavBarPointer} ${
              active === "/" ? styles.active : ""
            }`}
          >
            <NavItem label="Home" handleClick={handleNavClick("/")}>
              {" "}
            </NavItem>
          </div>
          <div
            className={`${styles.NavBarPointer} ${
              active === "/questions" ? styles.active : ""
            }`}
          >
            <NavItem
              label="Find A Game"
              handleClick={handleNavClick("/questions")}
            ></NavItem>
          </div>
          <div
            className={`${styles.NavBarPointer} ${
              active === "/playlist" ? styles.active : ""
            }`}
          >
            <NavItem
              label="My Games2Play"
              handleClick={handleNavClick("/playlist")}
            ></NavItem>
          </div>
        </div>
        <Navbar>
          <div className={styles.searchBarStyle}>
            <SearchBar placeholder="Search for a game..." data={""} />
          </div>
        </Navbar>
      </div>
    </div>
  );
}

export default NavBarTop;
