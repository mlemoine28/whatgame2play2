const addGame = (req, res) => {
  const con = setUpConnection();

  const {
    game_id,
    name,
    released,
    metacritic,
    background_image,
    playtime,
  } = req.body;

  const sql = `
    INSERT IGNORE INTO game (game_id, name, released, metacritic, background_image, playtime)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  const values = [
    game_id,
    name,
    released,
    metacritic,
    background_image,
    playtime,
  ];

  con.query(sql, values, (err, rows) => {
    con.destroy();
    if (!err) {
      res.status(201).json({ message: "Game added (or already exists)" });
    } else {
      console.log("Error adding game:", err);
      res.status(500).json({ error: "Failed to add game" });
    }
  });
};