var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = input.trim().split(`\n`).map(Number)

let alcool = 0;
let gasolina = 0;
let diesel = 0;

for (let i = 0; i < a.length; i++) {
    if (a[i] === 1)
        alcool++
    else if (a[i] === 2) {
        gasolina++
    } else if (a[i] === 3) {
        diesel++
    } else if (a[i] === 4) {
        console.log(`MUITO OBRIGADO\nAlcool: ${alcool}\nGasolina: ${gasolina}\nDiesel: ${diesel}`);
        break;
    }
}