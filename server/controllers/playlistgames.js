const addGameToPlaylist = (req, res) => {
  const con = setUpConnection();

  const { playlist_id, game_id } = req.body;

  if (!playlist_id || !game_id) {
  return res.status(400).json({ error: "Missing playlist_id or game_id" });
}

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

const getPlaylistGames = (req, res) => {
  const con = setUpConnection();
  const playlist_id = req.params.playlist_id;

  const sql = `
    SELECT game_id FROM playlist_games WHERE playlist_id = ?
  `;

  con.query(sql, [playlist_id], (err, rows) => {
    con.destroy();
    if (!err) {
      res.status(200).json(rows);
    } else {
      console.log("Error retrieving games for playlist:", err);
      res.status(500).json({ error: "Failed to retrieve games" });
    }
  });
};

module.exports = {
  addGameToPlaylist,
  getPlaylistGames,
};
