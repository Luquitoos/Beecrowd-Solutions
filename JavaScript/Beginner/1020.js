var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var tempo = parseInt(lines[0])

var ano = Math.floor(tempo / 365); tempo %= 365;
console.log(ano + ` ano(s)`);

var mes = Math.floor(tempo / 30); tempo %= 30;
console.log(mes + ' mes(es)');

var dia = Math.floor(tempo / 1); tempo %= 1;
console.log(dia + ' dia(s)');