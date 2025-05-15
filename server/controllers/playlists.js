import express from "express";
import cors from "cors";
import { setUpConnection } from "../utils/setUpConnection.js";
const app = express();
app.use(cors());

export const addToPlaylist = (req, res) => {
  console.log("Request body:", req.body);
 const con = setUpConnection();
 
 let sql = `INSERT INTO playlists
 (userID,
 gameID,
 playlistID
 )
 VALUES (?, ?, ?)`;

 const values = [
   req.body.userID,
   req.body.gameID,
   req.body.playlistID,
 ];

 con.query(sql, values, (err, rows) => {
  console.log("Rows: ", rows);
   con.destroy();
   if (!err) {
     res.send(JSON.stringify(rows));
   } else {
     console.log("Error while performing Query.", err);
   }
 });
};

export const getPlaylists = (req, res) => {
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

