const express = require("express");
const { addToPlaylist, getPlaylists } = require("../controllers/playlists.js");
// This is the playlist route file, which handles requests related to playlists.
const router = express.Router();

router.put("/add", addToPlaylist);
router.get("/getPlaylists", getPlaylists);

module.exports = router







