const addGameToPlaylist = (req, res) => {
  const con = setUpConnection();

  const { playlist_id, game_id } = req.body;

  const sql = `
    INSERT INTO playlist_games (playlist_id, game_id)
    VALUES (?, ?)
  `;

  const values = [playlist_id, game_id];

  con.query(sql, values, (err, rows) => {
    con.destroy();
    if (!err) {
      res.status(201).json({ message: "Game added to playlist" });
    } else {
      console.log("Error linking game to playlist:", err);
      res.status(500).json({ error: "Failed to link game to playlist" });
    }
  });
};
