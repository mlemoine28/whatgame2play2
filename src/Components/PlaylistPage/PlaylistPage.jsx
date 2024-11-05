import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Cards/MiniCard.module.css";
import { usePlaylist } from "../../assets/Contexts/PlaylistContext";

function PlaylistPage() {
  const { playlist } = usePlaylist();

  return (
    <div
      className={styles.container}
      style={{ paddingTop: "2rem", color: "#39FF14" }}
    >
      <h1>My Games2Play</h1>
      {playlist.length === 0 ? (
        <p>No games added yet!</p>
      ) : (
        playlist.map((game, index) => (
          <div key={index}>
            <h2>{game.name}</h2>
            <p>{game.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default PlaylistPage;
