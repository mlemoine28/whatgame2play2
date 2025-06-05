const express = require("express");
const { addGameDeveloper } = require("../controllers/gamedeveloper.js");
// This is the playlist route file, which handles requests related to playlists.
const router = express.Router();

router.put("/add", addGameDeveloper);


module.exports = router


