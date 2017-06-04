var getStock = require('./controllers/get-stock.js');
var getStocks = require('./controllers/get-stocks.js');
var updateStock = require('./controllers/update-stock.js');

module.exports = function (app) {
    app.get('/get-stock', getStock);
    app.get('/get-stocks', getStocks);
    app.post('/update-stock', updateStock)
}