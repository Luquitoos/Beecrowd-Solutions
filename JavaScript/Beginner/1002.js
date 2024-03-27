var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var pi = 3.14159;
var r = parseFloat(input);
var area = pi * (r**2);

console.log("A=" +area.toFixed(4));