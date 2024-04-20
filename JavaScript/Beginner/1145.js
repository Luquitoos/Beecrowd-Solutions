var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var c = parseInt(lines[0]);
var l = parseInt(lines[1]);

var output = "";

for (var i = 1; i <= l; i++) {
    output += i + " ";
    if (i % c === 0 || i === l) {
        console.log(output.trim());
        output = "";
    }
}