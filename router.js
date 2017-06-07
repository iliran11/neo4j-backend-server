var getStocks = require('./controllers/get-stocks-list.js');
var mergeStock = require('./controllers/merge-stock.js');
var portoflio = require('./controllers/portfolio.js');
var changeTurn = require('./controllers/turn.js');

module.exports = function (app) {
    app.get('/get-stocks-list', getStocks);
    app.post('/merge-stock', mergeStock);
    app.post('/portfolio', portoflio);
    app.post('/change-turn',changeTurn);
}