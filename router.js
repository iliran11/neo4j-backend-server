var getStocks = require('./controllers/get-stocks-list.js');
var updateCreateStock = require('./controllers/update-create-stock.js');
var portoflio = require('./controllers/portfolio.js');
var changeTurn = require('./controllers/turn.js');

module.exports = function (app) {
    app.get('/get-stocks-list', getStocks);
    app.post('/update-create-stock', updateCreateStock);
    app.post('/portfolio', portoflio);
    app.post('/change-turn',changeTurn);
}