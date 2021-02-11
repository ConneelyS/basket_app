const express = require('express');
const home = require('./routes/home');
const path = require('path');

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
app.use('/', home);

app.listen(port);
console.log(`The web app is running on http://localhost:${port}`);