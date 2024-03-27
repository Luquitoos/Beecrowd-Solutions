var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a,b] = input.split('\n').map(Number)

var c = a/b
c = c.toFixed(3)

console.log(c + ' km/l')