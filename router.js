var index = require('./controllers/index.js');

module.exports = function (app) {
    app.get('/helo', function (req, res) {
        res.send('at last!');
    });
}