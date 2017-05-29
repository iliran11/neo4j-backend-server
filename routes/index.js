var express = require('express');
var router = express.Router();
var query = require('../neo4jApi.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('index');
});

module.exports = router;
