const express = require("express");
const cors = require("cors");
const setUpConnection = require("../utils/setUpConnection.js"); // Import the database connection setup
const app = express();
app.use(cors()); // ALWAYS TAKE THESE FIRST 5 LINES WHENEVER YOU USE MYSQL TABLES. EVERY FILE IN THE CONTROLLERS FOLDER WILL BE A TABLE FROM MYSQL.