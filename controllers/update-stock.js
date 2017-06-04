var isStockExist = require('../helpers/isStockExist');
var updateStock = require('../helpers/update-stock');

module.exports = (req, res) => {
    isStockExist({
        user: '"Liran"',
        stock: '"Google"'
    })
        .then(isExist => {
            if (isExist > 0) {
                //update the result
                updateStock({
                    user: "Liran",
                    stock: "Google",
                    quantity: 3
                })
                    .then(resolve => {
                        res.send("completed");
                    })
            } else {
                //craete new node
            }
        })
}