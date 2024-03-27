var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numeros = input.split(/\s+/).map(Number);

var positivos = 0;

for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
        positivos++;
    }
}

console.log(positivos + ' valores positivos');