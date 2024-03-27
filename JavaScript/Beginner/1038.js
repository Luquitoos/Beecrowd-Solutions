var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a,b] = input.split(` `).map(Number)

if (a == 1)
console.log('Total: R$ ' + (4*b).toFixed(2))
else if (a == 2)
console.log('Total: R$ ' + (4.5*b).toFixed(2))
else if (a == 3) 
console.log('Total: R$ ' + (5*b).toFixed(2))
else if (a == 4)
console.log('Total: R$ ' + (2*b).toFixed(2))
else if (a == 5)
console.log('Total: R$ ' + (1.5*b).toFixed(2))