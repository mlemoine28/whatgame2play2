import React from "react";
import { useMemo } from "react";

const usePlaylistCheck = (playlist, detailedGame) => {
  const isGameInPlaylist = useMemo(() => {
    if (!detailedGame?.id) {
      return false;
    }
    const playlistIds = playlist.map((game) => game.id);
    const playlistCheck = playlistIds.includes(detailedGame?.id);
    console.log("Is Game In Playlist?!:", playlistCheck);
    return playlistCheck;
  }, [playlist, detailedGame]);
  return isGameInPlaylist;
};

export default usePlaylistCheck;
