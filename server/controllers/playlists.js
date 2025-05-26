const express = require("express");
const cors = require("cors");
const setUpConnection = require("../utils/setUpConnection.js"); // Import the database connection setup
const app = express();
app.use(cors());

 const addToPlaylist = (req, res) => {
  
 const con = setUpConnection();
 
 let sql = `INSERT INTO playlists
 (userID,
 gameIDs,
 title
 )
 VALUES (?, ?, ?)`;

 const values = [
   req.body.userID,
   req.body.gameID,
   req.body.title,
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

 const getPlaylists = (req, res) => {
 const con = setUpConnection();
 let sql = `SELECT * FROM playlists
 WHERE userID = ?`;
 const values = [req.body.userID];
 
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
  addToPlaylist,
  getPlaylists,
};