import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./Navbar.module.css";
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
            active === "/playlist" ? styles.active : ""
          }`}
        >
          <NavItem
            label="My Playlist"
            handleClick={playlistButtonClick}
          ></NavItem>
        </div>
        <div></div>
      </div>
    </div>

    // <Navbar expand="lg" className={styles.navBarStyle}>
    //   <Container>
    //     <Navbar.Brand
    //       onClick={backToHomeClick}
    //       className={`${styles.NavBarPointer} ${
    //         active === "/home" ? styles.active : ""
    //       }`}
    //     >
    //       Home
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">

    //       <Nav className="me-auto">
    //         <Nav.Link
    //           onClick={playlistButtonClick}
    //           className={active === "/playlist" ? styles.playlistButton : ""} //no idea why .active doesn't work!!
    //         >
    //           {console.log("Active state for Playlist:", active)}
    //           My Playlist
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //     {/* <a className={styles.test}>Heyoooooooooo</a> */}
    //     <SearchBar />
    //   </Container>
    // </Navbar>
  );
}

export default NavBarTop;
