import React from "react";
import { createContext, useContext, useState } from "react";

const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);

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

  return (
    <PlaylistContext.Provider
      value={{ playlist, addToPlaylist, playlistButtonClick, removeFromPlaylist }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylist = () => useContext(PlaylistContext);
