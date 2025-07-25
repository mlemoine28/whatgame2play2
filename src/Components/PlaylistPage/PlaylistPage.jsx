import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../Cards/MiniCard.module.css";
import PlaylistCard from "./PlaylistCard";
import ButtonBack from "../Button/ButtonBack";
import { useNavigate, useLocation } from "react-router-dom";

function PlaylistPage() {
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);
  const [playlistGames, setPlaylistGames] = useState([]);
  const [loadingPlaylists, setLoadingPlaylists] = useState(false);
  const [loadingGames, setLoadingGames] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const userID = 2; // Replace with actual user auth logic

  // Back button logic
  const backButtonClick = () => {
    if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate(-1);
    }
  };

  // Fetch user playlists on mount
  useEffect(() => {
    const fetchPlaylists = async () => {
      setLoadingPlaylists(true);
      try {
        const res = await axios.get("http://localhost:8080/playlist/getPlaylists", {
          params: { userID },
        });
        setPlaylists(res.data);
        // Select first playlist by default (optional)
        if (res.data.length > 0) {
          setSelectedPlaylistId(res.data[0].playlist_id);
        }
      } catch (err) {
        console.error("Failed to fetch playlists:", err);
      } finally {
        setLoadingPlaylists(false);
      }
    };
    fetchPlaylists();
  }, [userID]);

  // Fetch games when selectedPlaylistId changes
  useEffect(() => {
    if (!selectedPlaylistId) return;

    const fetchGames = async () => {
      setLoadingGames(true);
      try {
        const res = await axios.get(
          `http://localhost:8080/playlistGames/${selectedPlaylistId}/games`
        );
        setPlaylistGames(res.data); // Array of {game_id}
      } catch (err) {
        console.error("Failed to fetch games for playlist:", err);
        setPlaylistGames([]);
      } finally {
        setLoadingGames(false);
      }
    };
    fetchGames();
  }, [selectedPlaylistId]);

  // Click handler to select a playlist
  const handleSelectPlaylist = (id) => {
    setSelectedPlaylistId(id);
  };

  return (
    <div style={{ backgroundColor: "#010622", paddingTop: "3rem" }}>
      <div style={{ marginLeft: "3rem" }}>
        <ButtonBack label="Back" handleClick={backButtonClick} />
      </div>

      <h2 style={{ color: "white", marginLeft: "3rem" }}>My Playlists</h2>

      {/* Playlists horizontal list */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          padding: "0 1rem",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        {loadingPlaylists ? (
          <p style={{ color: "white" }}>Loading playlists...</p>
        ) : playlists.length === 0 ? (
          <p style={{ color: "white" }}>No playlists found.</p>
        ) : (
          playlists.map((playlist) => (
            <button
              key={playlist.playlist_id}
              onClick={() => handleSelectPlaylist(playlist.playlist_id)}
              style={{
                padding: "0.5rem 1rem",
                cursor: "pointer",
                backgroundColor:
                  selectedPlaylistId === playlist.playlist_id
                    ? "#3478f6"
                    : "#222",
                color: "white",
                border: "none",
                borderRadius: "8px",
                whiteSpace: "nowrap",
              }}
            >
              {playlist.name}
            </button>
          ))
        )}
      </div>

      {/* Display games in selected playlist */}
      <div
        className={styles.containerdisplay}
        style={{ minHeight: "50vh", padding: "1rem" }}
      >
        {loadingGames ? (
          <p style={{ color: "white" }}>Loading games...</p>
        ) : playlistGames.length === 0 ? (
          <p style={{ color: "white" }}>No games in this playlist.</p>
        ) : (
          playlistGames.map(({ game_id }) => (
            <div key={game_id} style={{ marginBottom: "1rem" }}>
              {/* 
                Replace this with your MiniCardDisplay or PlaylistCard component 
                to fetch and show full game details based on game_id 
              */}
              <div style={{ color: "white" }}>Game ID: {game_id}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default PlaylistPage;