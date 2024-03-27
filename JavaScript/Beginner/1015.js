var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a,b,c,d] = input.split(/\s+/).map(Number)

var x = (a-c)**2
var y = (b-d)**2

var p = Math.sqrt(x + y)
p = p.toFixed(4)
console.log(p)