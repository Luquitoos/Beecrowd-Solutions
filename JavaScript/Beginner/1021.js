var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valor = parseFloat(lines[0]) + 0.001;

var notas = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00];
var moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01];

console.log("NOTAS:");
for (var nota of notas) { 
    var quantidade = Math.floor(valor / nota);
    console.log(quantidade + ` nota(s) de R$ ` + nota.toFixed(2));
    valor %= nota;
}

console.log("MOEDAS:");
for (var moeda of moedas) {
    var quantidade = Math.floor(valor / moeda);
    console.log(quantidade + ` moeda(s) de R$ ` + moeda.toFixed(2));
    valor %= moeda;
}