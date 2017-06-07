/**
 * sending a request does not need headers.
 * will return array of strings. for example:
 * ["Google","BMW"]
 */

const driver = require('../neo4jApi.js');
const Stock = require('../models/stock.js');

module.exports = (req, res) => {
    const session = driver.session();
    return session
        .run('MATCH (stockMeta:StockMeta) RETURN stockMeta')
        .then((result) => {
            records = result.records.map((record) => {
                return new Stock(record.get('stockMeta')).name;
            });
            res.send(records);
        })
}