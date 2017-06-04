var driver = require('../neo4jApi');

module.exports = function (options) {
    var query = `MATCH  (you:User {name:"${options.user}"})
MATCH (stockMeta:StockMeta {name:"${options.stock}"})
CREATE (you)-[purchased:Purchased]->(instanceStock:InstanceStock {
    purchaseTurn:${options.quantity},
}) -[meta:Meta]-> (stockMeta)
RETURN *`

    var session = driver.session();
    return new Promise(resolve => {
        session
            .run(query)
            .then(result => {
                session.close();
                resolve(result);
            })
    })
}