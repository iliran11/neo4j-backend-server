/**
 * send a request with "name" header that contains the name of the stockMeta. 
 */
var driver = require('../neo4jApi.js');
var Stock = require('../models/stock.js');
module.exports = function (req, res) {
  var session = driver.session();
  return session
    .run(
    'MATCH (stock:StockMeta {name:"Google"}) return stock'
    )
    .then(result => {
      session.close();
      records = result.records.filter(function (record) {
        var stock = (new Stock(record.get('stock')));
        return stock.name === req.get('name');
      });
      res.send(records);
    })
}
