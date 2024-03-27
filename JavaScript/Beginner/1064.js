var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [a,b,c,d,e,f] = input.split('\n').map(Number)

var numeros = [a,b,c,d,e,f]

var positivos = 0

for (var i=0; i < numeros.length; i++){
    if (numeros[i]>0){
        positivos++
    }
}

var soma = 0
var divisores = 0

for (var i = 0; i < numeros.length; i++) {
    soma += (numeros[i] > 0 ? numeros[i] : 0);
        if (numeros[i] > 0)
            divisores++
}

console.log(positivos + ' valores positivos' + '\n' + (soma/divisores).toFixed(1))