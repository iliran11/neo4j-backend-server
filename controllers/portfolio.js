const getPortfolio = require('../helpers/get-portfolio.js');

module.exports = (req, res) => {
    const { user, stock } = req.body;
    getPortfolio({ user, stock })
        .then(neoResponse => {
            const instanceMetaKey = 0;
            const metaStockKey = 1;
            const result = neoResponse.records.map(currentRecord => {
                console.log(currentRecord.length)
                return {
                    name: currentRecord._fields[metaStockKey].properties.name,
                    quantity: currentRecord._fields[instanceMetaKey].properties.quantity.low
                }
            })
            res.send(result);
        })
}