const express = require('express');
const path = require('path');
const home = require('./routes/home');
const register = require('./routes/register');

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', home);
app.use('/register', register);

app.listen(port);
console.log(`The web app is running on http://localhost:${port}`);