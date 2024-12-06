import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ButtonIntro from "../Button/ButtonIntro";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import NavItem from "./NavItem";

function NavBarTop() {
  const navigate = useNavigate();
  const backToHomeClick = () => {
    setActive("/home");
    navigate("/home");
  };

  const [active, setActive] = useState(null);

  const playlistButtonClick = () => {
    setActive("/playlist");
    console.log("After setting active:", "/playlist");
    navigate("/playlist");
  };

  const questionsButtonClick = () => {
    setActive("/questions");
    console.log("After setting active:", "/questions");
    navigate("/questions");
  };

  return (
    <div className={styles.NavBarContainer}>
      <div className={styles.navBarStyle}>
        <div
          className={`${styles.NavBarPointer} ${
            active === "/home" ? styles.active : ""
          }`}
        >
          <NavItem label="Home" handleClick={backToHomeClick}>
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
            handleClick={questionsButtonClick}
          ></NavItem>
        </div>
        <div
          className={`${styles.NavBarPointer} ${
            active === "/playlist" ? styles.active : ""
          }`}
        >
          <NavItem
            label="My Playlist"
            handleClick={playlistButtonClick}
          ></NavItem>
        </div>
        <Navbar expand="lg" className={styles.navBarStyle}>
          <div className={styles.searchBarStyle}>
            <SearchBar placeholder="Search for a game..." data={""} />
          </div>
        </Navbar>
      </div>
    </div>
  );
}

export default NavBarTop;
