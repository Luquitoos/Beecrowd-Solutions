var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var d = parseInt(lines[0])
var h = d/(90-60)
var m = h * 60

console.log(m + ' minutos')