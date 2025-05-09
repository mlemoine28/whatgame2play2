// const { setUpConnection } = require('./utils/setUpConnection');

// setUpConnection();
const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {
 origin: ['http://localhost:5173']
}
app.use(cors(corsOptions));

app.get('/test', (req, res) => {
 res.json({'colours': { white: 'white', black: 'black', favourite: 'green' }});
});

app.listen(3306, () => {
 console.log('Server started on Port 3306');
});