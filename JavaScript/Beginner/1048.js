var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [a] = input.split(/\s+/).map(Number);

if (a >= 0 && a <= 400.00){
    console.log('Novo salario: ' + (a + (a * (15/100))).toFixed(2) + '\n' + 'Reajuste ganho: ' + (a * (15/100)).toFixed(2) + '\n' + 'Em percentual: 15 %')
}else if (a >= 400.01 && a <= 800.00){
    console.log('Novo salario: ' + (a + (a * (12/100))).toFixed(2) + '\n' + 'Reajuste ganho: ' + (a * (12/100)).toFixed(2) + '\n' + 'Em percentual: 12 %')
}else if (a >= 800.01 && a <= 1200.00){
    console.log('Novo salario: ' + (a + (a * (10/100))).toFixed(2) + '\n' + 'Reajuste ganho: ' + (a * (10/100)).toFixed(2) + '\n' + 'Em percentual: 10 %')
}else if (a >= 1200.01 && a <= 2000.00){
    console.log('Novo salario: ' + (a + (a * (7/100))).toFixed(2) + '\n' + 'Reajuste ganho: ' + (a * (7/100)).toFixed(2) + '\n' + 'Em percentual: 7 %')
}else if (a > 2000.00){
    console.log('Novo salario: ' + (a + (a * (4/100))).toFixed(2) + '\n' + 'Reajuste ganho: ' + (a * (4/100)).toFixed(2) + '\n' + 'Em percentual: 4 %')}