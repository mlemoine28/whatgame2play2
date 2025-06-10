import React, { useState, useEffect } from "react";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import NavItem from "../NavBar/NavItem";
import styles from "./ProfilePage.module.css";
import axios from "axios";

function ProfilePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams(); // Assuming you have a route like /profile/:id

  const backToHomeClick = () => {
    //fetchAPI();//
    navigate("/");
  };

  const fetchAPI = async () => {
    const body = {
      userID: 1,
      email: "test@email.com",
      username: "Dude Guy",
      favouriteGameID: 250,
    };
    await axios.put("http://localhost:8080/profile/add", body);
  };

  // useEffect(() => {
  //   fetchAPI();
  // }, []);

  return (
    <div>
      <div className={styles.navItem}>
        <NavItem label="Back to Home" handleClick={backToHomeClick} />
        <h1 className={styles.h1}>Profile</h1>

        <div className={styles.profileContainer}>
          <h2>Recent Games Added</h2>
          <br></br>
          <h2>Reviews</h2>
          <br></br>
          <h2>Playlists</h2>
          <br></br>
          <h2>Gaming Stats</h2>
          <p>Total Games Added</p>
          <p>Total Reviews Written</p>
          <p>Total Playlists Created</p>
          <p>Most Played Genre</p>
          <p>Most Played Developer</p>
          <p>Most Played Platform</p>
          <p>Longest Game Played</p>
          <br></br>
          <h2>WhatGame2Play Badges</h2>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
