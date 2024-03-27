var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a,b,c] = input.split(' ').map(Number)

var d = (a+b+ Math.abs(a - b))/2

var e = (d+c + Math.abs(d - c))/2

console.log(e + ' eh o maior')