var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = Number(input);
if (a >= 0 && a <= 2000) {
    console.log('Isento');
} else if (a >= 2000.01 && a <= 3000) {
    var tax = (a - 2000) * 0.08;
    console.log('R$ ' + tax.toFixed(2));
} else if (a >= 3000.01 && a <= 4500) {
    var tax1 = ((a-2000)-(a-3000)) * 0.08;
    var tax2 = (a - 3000) * 0.18;
    console.log('R$ ' + (tax1 + tax2).toFixed(2));
} else if (a > 4500) {
    var tax1 = ((a-2000)-(a-3000)) * 0.08;
    var tax2 = ((a - 3000) - (a-4500)) * 0.18;
    var tax3 = (a - 4500) * 0.28;
    console.log('R$ ' + (tax1 + tax2 + tax3).toFixed(2));
}