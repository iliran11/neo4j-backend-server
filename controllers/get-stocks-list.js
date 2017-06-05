/**
 * sending a request does not need headers.
 * will return array of strings. for example:
 * ["Google","BMW"]
 */

var driver = require('../neo4jApi.js');
var Stock = require('../models/stock.js');

module.exports = function (req, res) {
    var session = driver.session();
    return session
        .run(
        'MATCH (stockMeta:StockMeta) RETURN stockMeta'
        )
        .then(function (result) {
            records = result.records.map(function (record) {
                return new Stock(record.get('stockMeta')).name;
            });
            res.send(records);
        })
}