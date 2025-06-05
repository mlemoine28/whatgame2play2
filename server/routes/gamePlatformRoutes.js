const express = require("express");
const { addGamePlatform } = require("../controllers/gameplatform.js");
// This is the playlist route file, which handles requests related to playlists.
const router = express.Router();

router.put("/add", addGamePlatform);


module.exports = router


