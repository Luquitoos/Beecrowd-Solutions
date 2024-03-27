var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a,b,c,d] = input.split('\n').map(Number)

console.log("DIFERENCA = " + ((a*b) - (c*d)));