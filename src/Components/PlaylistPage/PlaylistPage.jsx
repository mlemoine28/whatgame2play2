import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Cards/MiniCard.module.css";
import { usePlaylist } from "../../assets/Contexts/PlaylistContext";
import MiniCardDisplay from "../Cards/MiniCardDisplay";
import { Spinner } from "react-bootstrap";

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
              gameRelease={game.released}
              gameMetacritic={game.metacritic}
              gameImage={game.background_image}
              gameLength={game.playtime}
              handleMoreDetails={() => handleMoreDetails(game)}
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
