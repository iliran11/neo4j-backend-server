var isStockExist = require('../helpers/isStockExist');
var updateStock = require('../helpers/update-stock');
var createStock = require('../helpers/create-stock');

module.exports = (req, res) => {
    const { user, stock, quantity } = req.body;
    isStockExist({ user, stock })
        .then(isExist => {
            if (isExist > 0) {
                //update the result
                updateStock({ user, stock, quantity })
                    .then(() => {
                        res.send("update completed");
                    })
            } else {
                //craete new node
                createStock({ user, stock, quantity })
                    .then(() => {
                        res.send('creation completed')
                    })
            }
        })
}