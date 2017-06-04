var driver = require('../neo4jApi');

module.exports = function (options) {
    var query = `MATCH  (you:User {name:"${options.user}"})
MATCH (google:StockMeta {name:"${options.stock}"})
MATCH (you)-[purchased:Purchased]->(instanceStock:InstanceStock) - [meta:Meta] -> (google)
SET instanceStock.quantity=${options.quantity}
RETURN instanceStock`;
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