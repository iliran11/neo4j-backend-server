var getStock = require('./controllers/get-stock.js');
var getStocks = require('./controllers/get-stocks.js');

module.exports = function (app) {
    app.get('/get-stock', getStock);
    app.get('/get-stocks', getStocks);
}