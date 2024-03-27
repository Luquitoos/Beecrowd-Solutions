var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a,b,c] = input.split('\n').map(Number)

console.log("MEDIA = " + (((a*2) + (b*3) +(c*5)) / 10).toFixed(1));