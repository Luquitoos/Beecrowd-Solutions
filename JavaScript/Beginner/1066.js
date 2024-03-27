var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numeros = input.split('\n').map(Number)

var positivos = 0;
var negativos = 0;
var pares = 0;
var impares = 0;

for (var i = 0; i < 5; i++) {
    if (numeros[i] % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
    if (numeros[i] > 0) {
        positivos++;
    } else if (numeros[i] < 0) {
       negativos++; 
    }
}

console.log(pares + ' valor(es) par(es)');
console.log(impares + ' valor(es) impar(es)');
console.log(positivos + ' valor(es) positivo(s)');
console.log(negativos + ' valor(es) negativo(s)');