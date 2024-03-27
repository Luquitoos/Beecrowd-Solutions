var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var value = parseInt(lines[0]);
console.log(value);

var notas = [100, 50, 20, 10, 5, 2, 1];
for (var nota in notas) console.log(Math.floor(value / notas[nota]) + ' nota(s) de R$ ' + notas[nota] + ',00'), value %= notas[nota]