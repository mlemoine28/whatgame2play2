import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../Cards/MiniCard.module.css";
import { usePlaylist } from "../../assets/Contexts/PlaylistContext";
import PlaylistDisplay from "./PlaylistCard";
import { Spinner } from "react-bootstrap";
import MiniCardDisplay from "../Cards/MiniCardDisplay";
import PlaylistCard from "./PlaylistCard";
import ButtonBack from "../Button/ButtonBack";

function PlaylistPage() {
  const { playlist, removeFromPlaylist } = usePlaylist();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("Location state in PlaylistPage:", location.state); // Should include 'from'

  const backButtonClick = () => {
    if (location.state?.from) {
      console.log("Navigating back to:", location.state.from);
      navigate(location.state.from);
    } else {
      navigate(-1);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#010622",
        paddingTop: "3rem",
      }}
    >
      <div
        style={{
          marginLeft: "3rem",
        }}
      >
        <ButtonBack label="Back" handleClick={backButtonClick} />
      </div>
      <div className={styles.textcontainer2}>
        <p>My Games2Play</p>
      </div>
      <div
        className={styles.containerdisplay}
        style={{ paddingTop: "0rem", minHeight: "100vh" }}
      >
        {loading ? (
          <div>
            <Spinner animation="border" role="status" variant="info">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : playlist?.length > 0 ? (
          playlist.map((game, i) => (
            <div key={i}>
              <PlaylistCard
                detailedGame={game}
                handleMoreDetails={() => handleMoreDetails(game)}
                buttonText="Remove From List"
                removeGame={removeFromPlaylist}
              />
            </div>
          ))
        ) : (
          <div className={styles.nogames}>(No games added)</div>
        )}
      </div>
    </div>
  );
}

export default PlaylistPage;
