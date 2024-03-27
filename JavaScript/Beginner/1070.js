var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines[0]);
for (var i = x; i < x + 12; i++) {
  if (i % 2 != 0) console.log(i);
}