import React, { useState, useEffect } from "react";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import NavItem from "../NavBar/NavItem";
import styles from "./ProfilePage.module.css";
import axios from "axios";

function ProfilePage() {
  const location = useLocation();
  const [colours, setColours] = useState({});
  const navigate = useNavigate();
  const { id } = useParams(); // Assuming you have a route like /profile/:id

  const backToHomeClick = () => {
    navigate("/");
  };

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/test");
    setColours(response.data.colours);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      <div className={styles.navItem}>
        <NavItem label="Back to Home" handleClick={backToHomeClick} />
        <h1 className={styles.h1}>{colours.favourite}'s Profile</h1>

        <div className={styles.profileContainer}>
          <h2>Recent Games Added</h2>
          <br></br>
          <h2>Reviews</h2>
          <br></br>
          <h2>Playlists</h2>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
