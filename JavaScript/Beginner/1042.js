var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [a,b,c] = input.split(' ').map(Number)

var menor = a < b ? (a < c ? a : c ) : (b < c ? b : c)
var maior = a > b ? (a > c ? a : c ) : (b > c ? b : c)
var medio = (a+b+c) - maior - menor 

console.log(menor + '\n' + medio + '\n' + maior + '\n')
console.log( a + '\n' + b + '\n' + c)