var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a,b] = input.split('\n').map(Number)

console.log("MEDIA = "+ (((a*3.5)+(b*7.5)) / 11).toFixed(5));