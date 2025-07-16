import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
  // ⏺️ Local games added in-session
  const [playlist, setPlaylist] = useState([]);

  // ⏺️ Persistent user-created playlists from DB
  const [userPlaylists, setUserPlaylists] = useState([]);

  const userID = 2; // 🔁 replace with real user logic later

  // ⏺️ Add/remove in-memory games
  const addToPlaylist = (game) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, game]);
  };

  const removeFromPlaylist = (gameId) => {
    setPlaylist((prev) => prev.filter((game) => game.id !== gameId));
  };

  const playlistButtonClick = (detailedGame) => {
    if (detailedGame) {
      addToPlaylist(detailedGame);
      console.log("Added to playlist:", detailedGame);
    }
  };

  // ⏺️ Fetch playlists the user created (for dropdowns)
  const fetchUserPlaylists = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/playlist/getPlaylists",
        {
          params: { userID },
        }
      );
      const formatted = res.data.map((p) => ({
        label: p.name,
        value: p.id,
      }));
      setUserPlaylists(formatted);
    } catch (err) {
      console.error("Failed to fetch user playlists:", err);
    }
  };

  useEffect(() => {
    fetchUserPlaylists();
  }, []);

  return (
    <PlaylistContext.Provider
      value={{
        playlist, // games added in memory
        addToPlaylist,
        removeFromPlaylist,
        playlistButtonClick,
        userPlaylists, // dropdown playlist options
        fetchUserPlaylists,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylist = () => useContext(PlaylistContext);
