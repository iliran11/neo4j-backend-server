var driver = require('../neo4jApi');

module.exports = options => {
    const query = `MATCH  (you:User {name:"${options.user}"})
MATCH (stockMeta:StockMeta {name:"${options.stock}"})
MERGE (you)-[purchased:Purchased]->(instanceStock:InstanceStock) - [meta:Meta] -> (stockMeta)
ON MATCH SET instanceStock.quantity = ${options.quantityTotal}
ON CREATE SET instanceStock.quantity = ${options.quantityTotal}
RETURN count(*)`
    console.log(query);
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