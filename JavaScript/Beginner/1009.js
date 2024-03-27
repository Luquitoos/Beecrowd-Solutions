var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines[1])
var b = parseFloat(lines[2]) * 0.15

var c = a + b
c = c.toFixed(2)
console.log('TOTAL = R$ '+ c)