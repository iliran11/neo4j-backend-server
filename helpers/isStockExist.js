var driver = require('../neo4jApi.js');
/**
 * options: {
 * user:"liran",
 * stock:"google"
 * }
 */
module.exports = function (options) {
    var query = `MATCH  (you:User {name:${options.user}})
MATCH (stockMeta:StockMeta {name:${options.stock}})
MATCH (you)-[purchased:Purchased]->(instanceStock:InstanceStock) - [meta:Meta] -> (stockMeta)
RETURN count(*)`
    var session = driver.session();
    return new Promise(resolve => {
        session
            .run(query)
            .then(result => {
                session.close();
                resolve(result.records[0]._fields[0].low)
            })
    })
}