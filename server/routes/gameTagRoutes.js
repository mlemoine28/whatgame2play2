const express = require("express");
const { addGameTag } = require("../controllers/game.js");
// This is the playlist route file, which handles requests related to playlists.
const router = express.Router();

router.put("/add", addGameTag);


module.exports = router


