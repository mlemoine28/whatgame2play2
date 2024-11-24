import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Cards/MiniCard.module.css";
import { usePlaylist } from "../../assets/Contexts/PlaylistContext";
import PlaylistDisplay from "./PlaylistCard";
import { Spinner } from "react-bootstrap";
import MiniCardDisplay from "../Cards/MiniCardDisplay";
import PlaylistCard from "./PlaylistCard";

function PlaylistPage() {
  const { playlist, removeFromPlaylist } = usePlaylist();
  const [loading, setLoading] = useState(false);

  return (
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
        <div className={styles.nogames}>No games added</div>
      )}
    </div>
  );
}

export default PlaylistPage;
