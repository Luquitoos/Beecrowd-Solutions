var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x = parseFloat(lines[0]);

if (0 <= x && x <= 25)
    console.log(`Intervalo [0,25]`);
else if (25 < x && x <= 50)
    console.log(`Intervalo (25,50]`);
else if (50 < x && x <= 75)
    console.log(`Intervalo (50,75]`);
else if (75 < x && x <= 100)
    console.log(`Intervalo (75,100]`);
else
    console.log(`Fora de intervalo`);