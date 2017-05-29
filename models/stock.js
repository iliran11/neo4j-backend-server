var _ = require('lodash');

function Stock(_node) {
    _.extend(this, _node.properties);
}
module.exports = Stock;