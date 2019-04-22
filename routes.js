const express = require('express');
const router = express.Router();


router.get('/test', function(req, res) {
    console.log(res);
});

module.exports = router