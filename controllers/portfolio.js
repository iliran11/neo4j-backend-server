const getPortfolio = require('../helpers/get-portfolio.js');

module.exports = (req, res) => {
    const { user, stock } = req.body;
    getPortfolio({ user, stock })
        .then(neoResponse => {
            const instanceMetaKey = 0;
            const metaStockKey = 1;
            const portfolio = neoResponse.records.map(currentRecord => {
                return {
                    name: currentRecord._fields[metaStockKey].properties.name,
                    quantity: currentRecord._fields[instanceMetaKey].properties.quantity.low
                }
            })
            const result = {
                portfolio,
                turn: neoResponse.records[0].get('you').properties.turn.low,
                user: neoResponse.records[0].get('you').properties.name
            }
            res.send(result);
        })
}