var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a,b,c] = input.split('\n').map(Number)

console.log("NUMBER = "+ a + '\n' + "SALARY = U$ " + (b * c).toFixed(2))