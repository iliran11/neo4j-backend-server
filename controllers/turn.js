const getPortfolio = require('../helpers/get-portfolio.js');
const turnHelper = require('../helpers/turn.js');

module.exports = (req, res) => {
    const { user, turn } = req.body;
    turnHelper({ user, turn })
        .then(result => {
            res.send('Turn Has Changed');
        })
}