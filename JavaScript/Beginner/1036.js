var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a,b,c] = input.split(' ').map(Number)

var delta = ((b) ** 2) - (4 * a * c)

var x1 = ((-1 * (b)) + (Math.sqrt(delta))) / (2 * a)
var x2 = ((-1 * (b)) - (Math.sqrt(delta))) / (2 * a)

if ((delta >= 0) && a > 0)
    console.log(`R1 = ` + x1.toFixed(5) + `\n` + `R2 = ` + x2.toFixed(5))
else console.log(`Impossivel calcular`)