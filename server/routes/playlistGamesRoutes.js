const express = require("express");
const {
  addGameToPlaylist,
  getPlaylistGames,
} = require("../controllers/playlistgames.js"); // Adjust path if needed

const router = express.Router();

// Add a game to a playlist
router.post("/addGame", addGameToPlaylist);

// Get all games in a specific playlist by playlist_id
router.get("/:playlist_id/games", getPlaylistGames);

module.exports = router;