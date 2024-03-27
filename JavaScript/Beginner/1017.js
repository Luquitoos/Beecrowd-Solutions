var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a,b] = input.split('\n').map(Number)

var r = 12

var l = (b/r)*a
l = l.toFixed(3)
console.log(l)