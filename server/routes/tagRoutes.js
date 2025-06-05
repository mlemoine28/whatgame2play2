const express = require("express");
const { addTag } = require("../controllers/tag.js");
const router = express.Router();

router.put("/add", addTag);


module.exports = router


