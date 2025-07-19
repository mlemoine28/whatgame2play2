import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import NavItem from "../NavBar/NavItem";
import styles from "./ProfilePage.module.css";
import axios from "axios";
import FormSubmit from "../FormSubmit/FormSubmit"; // adjust path as needed
import { usePlaylist } from "../../assets/Contexts/PlaylistContext";

function ProfilePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams(); // Assuming you're using /profile/:id route

  // Local state for playlist creation
  const [playlists, setPlaylists] = useState([]);
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const userID = 2; // Replace with actual user logic later

  const backToHomeClick = () => {
    navigate("/");
  };

  // ✅ Fetch playlists from backend
  const fetchAPI = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/playlist/getPlaylists",
        {
          params: { userID },
        }
      );
      const formatted = response.data.map((p) => ({
        label: p.name,
        value: p.playlist_id,
      }));
      setPlaylists(formatted);
    } catch (err) {
      console.error("Error fetching playlists:", err);
    }
  };

  // ✅ Add a new playlist
  const handleAddPlaylist = async () => {
    if (!newPlaylistName.trim()) return;
    try {
      await axios.post("http://localhost:8080/playlist/add", {
        userID,
        name: newPlaylistName,
      });
      setNewPlaylistName(""); // Clear input
      fetchAPI(); // Refresh playlist list
    } catch (err) {
      console.error("Error creating playlist:", err);
    }
  };

  const handleDeletePlaylist = async (playlistId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this playlist?"
    );
    if (!confirmed) return;

    try {
      const response = await fetch(
        `http://localhost:8080/playlist/delete/${playlistId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Playlist deleted successfully.");
        // Refresh playlists list if needed
        console.log("Deleting playlist id:", playlistId);
        fetchAPI();
      } else {
        const error = await response.json();
        alert("Error deleting playlist: " + error.error);
      }
    } catch (err) {
      console.error("Failed to delete playlist", err);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      <div className={styles.navItem}>
        <NavItem label="Back to Home" handleClick={backToHomeClick} />
        <h1 className={styles.h1}>Profile</h1>

        <div className={styles.profileContainer}>
          <h2>Recent Games Added</h2>
          <br />
          <h2>Reviews</h2>
          <br />
          <h2>Playlists</h2>

          {/* ✅ Playlist creation input and button */}
          <div className={styles.playlistCreator}>
            <input
              type="text"
              placeholder="New playlist name"
              value={newPlaylistName}
              onChange={(e) => setNewPlaylistName(e.target.value)}
              className={styles.input}
            />
            <button onClick={handleAddPlaylist} className={styles.button}>
              Create Playlist
            </button>
          </div>

          <div className={styles.playlistList}>
            {playlists.map((playlist) => (
              <div key={playlist.value} className={styles.playlistItem}>
                <span>{playlist.label}</span>
                <button onClick={() => handleDeletePlaylist(playlist.value)}>
                  Delete
                </button>
              </div>
            ))}
          </div>

          <br />
          <h2>Gaming Stats</h2>
          <p>Total Games Added</p>
          <p>Total Reviews Written</p>
          <p>Total Playlists Created</p>
          <p>Most Played Genre</p>
          <p>Most Played Developer</p>
          <p>Most Played Platform</p>
          <p>Longest Game Played</p>
          <br />
          <h2>WhatGame2Play Badges</h2>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
