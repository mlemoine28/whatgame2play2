const express = require("express");
const { addGameGenre } = require("../controllers/gamegenre.js");
// This is the playlist route file, which handles requests related to playlists.
const router = express.Router();

router.put("/add", addGameGenre);


module.exports = router


