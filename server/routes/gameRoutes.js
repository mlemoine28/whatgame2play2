const express = require("express");
const { addToGame } = require("../controllers/game.js");
// This is the playlist route file, which handles requests related to playlists.
const router = express.Router();

router.put("/add", addToGame);


module.exports = router


