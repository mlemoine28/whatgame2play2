const express = require('express');
const app = express();
const cors = require('cors');

const corsOptions = {
 origin: ['http://localhost:5173']
}

const playlistRoutes = require('./routes/playlistRoutes.js'); // this is importing playlist route folder
const profileRoutes = require('./routes/profileRoutes.js'); // this is importing profile route folder
const gameRoutes = require('./routes/gameRoutes.js'); // this is importing game route folder
const playlistGamesRoutes = require("./routes/playlistGamesRoutes.js"); // this is importing playlist games route folder


app.use(cors(corsOptions));
app.use(express.json());

app.use('/playlist', playlistRoutes);
app.use('/profile', profileRoutes);
app.use('/game', gameRoutes);
app.use("/playlistGames", playlistGamesRoutes);


app.listen(8080, () => {
 console.log('Server started on Port 8080');
});