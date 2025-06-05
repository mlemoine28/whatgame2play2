const express = require("express");
const { addGenre } = require("../controllers/genre.js");
const router = express.Router();

router.put("/add", addGenre);


module.exports = router


