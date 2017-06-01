var _ = require('lodash');
var Stock = require('./models/stock.js');

var neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "1"));

module.exports = driver;