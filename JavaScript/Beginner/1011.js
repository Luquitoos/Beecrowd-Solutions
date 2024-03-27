var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines[0]) ** 3
var b = (4.0/3) * 3.14159

console.log('VOLUME = '+ (a*b).toFixed(3))