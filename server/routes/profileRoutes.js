const express = require("express");
const { addToProfile } = require("../controllers/profiles.js");
// This is the playlist route file, which handles requests related to playlists.
const router = express.Router();

router.put("/add", addToProfile);


module.exports = router



