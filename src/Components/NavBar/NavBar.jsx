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
  const backToHomeClick = () => {
    setActive("/whatgame2play2");
    navigate("/whatgame2play2");
  };

  const [active, setActive] = useState(null);

  const playlistButtonClick = () => {
    console.log("Playlist button clicked");
    console.log("Navigating from:", `${location.pathname}${location.search}`);
    setActive("/playlist");
    navigate("/playlist", {
      state: { from: `${location.pathname}${location.search}` }, // Pass 'from' state
    });
  };

  const questionsButtonClick = () => {
    setActive("/questions");
    console.log("After setting active:", "/questions");
    navigate("/questions");
  };

  const loginButtonClick = () => {
    setActive("/login");
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <div className={styles.navBarStyle}>
        <div className={styles.buttonContainer}>
          <div
            className={`${styles.NavBarPointer} ${
              active === "/whatgame2play2" ? styles.active : ""
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
          <div
            className={`${styles.NavBarPointer} ${
              active === "/login" ? styles.active : ""
            }`}
          >
            <NavItem label="Login" handleClick={loginButtonClick}></NavItem>
          </div>
        </div>
        <Navbar>
          <div className={styles.searchBarStyle}>
            <SearchBar placeholder="Search for a game..." data={""} />
          </div>
        </Navbar>
      </div>
      <div
        className={`${styles.NavBarPointer} ${
          active === "/questions" ? styles.active : ""
        }`}
      >
        <PopupLogin></PopupLogin>
      </div>
    </div>
  );
}

export default NavBarTop;
