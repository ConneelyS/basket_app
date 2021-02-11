const express = require('express');
const router = express.Router();

router.post('/', (request, response, next) => {

    response.json({
        data: request.body

    });
});

module.exports = router;