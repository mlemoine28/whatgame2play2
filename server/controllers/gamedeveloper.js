const express = require("express");
const cors = require("cors");
const setUpConnection = require("../utils/setUpConnection.js"); // Import the database connection setup
const app = express();
app.use(cors()); // ALWAYS TAKE THESE FIRST 5 LINES WHENEVER YOU USE MYSQL TABLES. EVERY FILE IN THE CONTROLLERS FOLDER WILL BE A TABLE FROM MYSQL.

const addGameDeveloper = (req, res) => {
 const con = setUpConnection();
 
 let sql = `INSERT INTO gamedeveloper
  (game_id, developer_id)
 VALUES (?, ?)`; //These values will directly be taken from the table in workbench. Must match exactly what the columns are in the table.

 const values = [
   req.body.game_id, 
   req.body.developer_id
 ];

 con.query(sql, values, (err, rows) => {
 
   con.destroy();
   if (!err) {
     res.send(JSON.stringify(rows));
   } else {
     console.log("Error while performing Query.", err);
   }
 });
};

module.exports = {
 addGameDeveloper,
};