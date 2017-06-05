var driver = require('../neo4jApi');

module.exports = options => {
    const query = `MATCH  (you:User {name:"${options.user}"}) SET you.turn=${options.turn} RETURN you`
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