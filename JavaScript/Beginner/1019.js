var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var tempo = parseInt(lines[0])
var resultado = ''
var divisores = [3600, 60, 1]
for (divisor in divisores) resultado += (Math.floor(tempo / divisores[divisor]) + ':'), tempo %= divisores[divisor]
resultado = resultado.slice(0, -1)
console.log(resultado)