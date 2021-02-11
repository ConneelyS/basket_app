const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.send('Welcome to the home page route for the web app');
});

module.exports = router;