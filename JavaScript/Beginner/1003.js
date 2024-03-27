var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a,b] = input.split('\n').map(Number)

console.log("SOMA = "+ (a + b));