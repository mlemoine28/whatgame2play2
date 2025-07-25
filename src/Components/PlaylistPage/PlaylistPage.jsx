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
  const [userPlaylists, setUserPlaylists] = useState([]);
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);
  const [selectedPlaylistGames, setSelectedPlaylistGames] = useState([]);

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

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/playlists/getPlaylists"); // update this to match your backend
        const data = await response.json();
        setUserPlaylists(data);
        if (data.length > 0) {
          setSelectedPlaylistId(data[0].id); // default to first
          setSelectedPlaylistGames(data[0].games); // assuming `games` is an array
        }
      } catch (error) {
        console.error("Failed to fetch playlists:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylists();
  }, []);

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
        <p>My Playlists</p>
      </div>
      <div
        className={styles.containerdisplay}
        style={{ paddingTop: "0rem", minHeight: "100vh" }}
      >
        <div
          style={{
            display: "flex",
            gap: "1rem",
            padding: "1rem",
            overflowX: "auto",
          }}
        >
          {userPlaylists.map((pl) => (
            <button
              key={pl.id}
              onClick={() => {
                setSelectedPlaylistId(pl.id);
                setSelectedPlaylistGames(pl.games);
              }}
              style={{
                backgroundColor:
                  selectedPlaylistId === pl.id ? "#007bff" : "#444",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
              }}
            >
              {pl.name}
            </button>
          ))}
        </div>
        {loading ? (
          <div>
            <Spinner animation="border" role="status" variant="info">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : selectedPlaylistGames.length > 0 ? (
          selectedPlaylistGames.map((game, i) => (
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
          <div className={styles.nogames}>(No games in this playlist)</div>
        )}
      </div>
    </div>
  );
}

export default PlaylistPage;
