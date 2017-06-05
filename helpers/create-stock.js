var driver = require('../neo4jApi');

module.exports = options => {
    const query = `MATCH  (you:User {name:"${options.user}"})
MATCH (stockMeta:StockMeta {name:"${options.stock}"})
CREATE (you)-[purchased:Purchased]->(instanceStock:InstanceStock { quantity:${options.quantity}}) -[meta:Meta]-> (stockMeta)
RETURN *`
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