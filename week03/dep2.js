const dep1 = require('./dep1');

console.log('require dep1', dep1);
module.exports = () => {
    console.log('dwp1', dep1);
}