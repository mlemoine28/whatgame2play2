import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import NavItem from "../NavBar/NavItem";
import styles from "./ProfilePage.module.css";

function ProfilePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams(); // Assuming you have a route like /profile/:id

  const backToHomeClick = () => {
    navigate("/");
  };

  return (
    <div>
      <div className={styles.navItem}>
        <NavItem label="Back to Home" handleClick={backToHomeClick} />
        <h1 className={styles.h1}>{id}'s Profile</h1>

        <div className={styles.profileContainer}>
          <h1>Recent Games Added</h1>
          <br></br>
          <h1>Reviews</h1>
          <br></br>
          <h1>Playlists</h1>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
