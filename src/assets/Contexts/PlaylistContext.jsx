import React from "react";
import { createContext, useContext, useState } from "react";

const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (game) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, game]);
  };

  return (
    <PlaylistContext.Provider value={{ playlist, addToPlaylist }}>
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylist = () => useContext(PlaylistContext);
