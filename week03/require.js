console.log('require 가장 상단에 X');

module.exports = '나를 찾아라';

require('./var.js');

console.log('require.cache 이다');
console.log(require.cache);

console.log('require.main 이다');
console.log(require.main);

console.log(require.main == module );
console.log(require.main.filename);