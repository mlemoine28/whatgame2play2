const express = require("express");
const { addGameGenre } = require("../controllers/developer.js");
// This is the playlist route file, which handles requests related to playlists.
const router = express.Router();

router.put("/add", addDeveloper);


module.exports = router


