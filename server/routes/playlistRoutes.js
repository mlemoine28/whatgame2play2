const express = require("express");
const { addToPlaylist, getPlaylists, deletePlaylist } = require("../controllers/playlists.js");

const router = express.Router();

router.post("/add", addToPlaylist);
router.get("/getPlaylists", getPlaylists);
router.delete("/delete/:playlist_id", deletePlaylist);

module.exports = router;