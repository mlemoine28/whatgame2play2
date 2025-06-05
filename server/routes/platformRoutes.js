const express = require("express");
const { addPlatform } = require("../controllers/platform.js");
const router = express.Router();

router.put("/add", addPlatform);


module.exports = router


