const driver = require('../neo4jApi.js');
const stock = require('../models/stock.js');

module.exports = options => {
    const query = `MATCH  (you:User {name:"${options.user}"})
MATCH (stockMeta:StockMeta)
MATCH (you)-[purchased:Purchased]->(instanceStock:InstanceStock) - [meta:Meta] -> (stockMeta)
RETURN instanceStock,stockMeta,meta,you`
    const session = driver.session();
    return new Promise(resolve => {
        session
            .run(query)
            .then(result => {
                session.close()
                resolve(result);
            })
    })
}
