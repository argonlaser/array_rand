var array_rand = require('./index.js');

var array = [1, 2, 3, 4, 5, 6];
var list = array_rand.getRandomNumberInRangeSync(array, 2, 0, array.length - 1);
console.log(list);