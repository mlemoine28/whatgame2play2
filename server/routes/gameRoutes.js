const express = require("express");
const { addGame } = require("../controllers/game.js");
// This is the playlist route file, which handles requests related to playlists.
const router = express.Router();

router.put("/add", addGame);


module.exports = router


