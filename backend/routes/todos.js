const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.json('Hello Express');
});

module.exports = router;