import React from "react";
import { createContext, useContext, useState } from "react";

const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (game) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, game]);
  };

  const playlistButtonClick = (detailedGame, setClicked) => {
    if (detailedGame) {
      addToPlaylist(detailedGame);
      setClicked(true);

      console.log("Added to playlist:", detailedGame);
    }
  };

  return (
    <PlaylistContext.Provider
      value={{ playlist, addToPlaylist, playlistButtonClick }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylist = () => useContext(PlaylistContext);
