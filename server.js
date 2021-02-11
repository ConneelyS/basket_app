const express = require('express');
const home = require('./routes/home');

const app = express();
const port = 3000;

app.use('/', home);

app.listen(port);
console.log(`The web app is running on http://localhost:${port}`);