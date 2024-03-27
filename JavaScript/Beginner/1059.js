var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (var i = 2; i <= 100; i += 2) {
    console.log(i);
}