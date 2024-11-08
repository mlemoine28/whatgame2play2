import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Cards/MiniCard.module.css";
import { usePlaylist } from "../../assets/Contexts/PlaylistContext";
import PlaylistDisplay from "./PlaylistCard";
import { Spinner } from "react-bootstrap";
import MiniCardDisplay from "../Cards/MiniCardDisplay";

function PlaylistPage() {
  const { playlist } = usePlaylist();
  const [loading, setLoading] = useState(false);

  return (
    <div className={styles.containerdisplay} style={{ paddingTop: "0rem" }}>
      {loading ? (
        <div>
          <Spinner animation="border" role="status" variant="info">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : playlist?.length > 0 ? (
        playlist.map((game, i) => (
          <div key={i}>
            <MiniCardDisplay
              gameTitle={game.name}
              gameMetacritic={game.metacritic}
              gameImage={game.background_image}
              handleMoreDetails={() => handleMoreDetails(game)}
              buttonText="Remove From List"
            />
          </div>
        ))
      ) : (
        <div>No games to show</div>
      )}
    </div>
  );
}

export default PlaylistPage;
