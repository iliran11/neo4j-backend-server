const isStockExist = require('../helpers/isStockExist');
const mergeStock = require('../helpers/merge-stock');

module.exports = (req, res) => {
    const { user, stock, quantityTotal } = req.body;
    //merge node
    mergeStock({ user, stock, quantityTotal })
        .then(() => {
            res.send('merge completed')
        })
}