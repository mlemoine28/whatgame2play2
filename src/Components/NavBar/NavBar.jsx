import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./Navbar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBarTop() {
  const navigate = useNavigate();
  const backToHomeClick = () => {
    navigate("/home");
  };

  const playlistButtonClick = () => {
    navigate("/playlist");
  };

  return (
    <Navbar expand="lg" className={styles.navBarStyle}>
      <Container>
        <Navbar.Brand
          onClick={backToHomeClick}
          className={styles.NavBarPointer}
        >
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={playlistButtonClick}>My Games2Play</Nav.Link>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <SearchBar />
      </Container>
    </Navbar>
  );
}

export default NavBarTop;
