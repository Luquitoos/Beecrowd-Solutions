var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a,b,c,d,e] = input.split('\n').map(Number)

var numeros = [a,b,c,d,e]

var pares = 0

for (var i=0; i < numeros.length; i++){
    if (numeros[i] % 2 === 0){
        pares++
    }
}
console.log(pares + ' valores pares')