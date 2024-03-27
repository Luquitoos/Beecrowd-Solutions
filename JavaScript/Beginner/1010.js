var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(/\s+/);

var a = parseFloat(lines[2]) * parseInt(lines[1])
var b = parseFloat(lines[5]) * parseInt(lines[4])

var s = a + b
s = s.toFixed(2)
console.log(`VALOR A PAGAR: R$ ` + s )