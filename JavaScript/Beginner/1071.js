var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [a, b] = input.split('\n').map(Number)
let s = 0;
let start = (b % 2 === 0) ? b + 1 : b + 2;
for (let i = start; i < a; i += 2) {
  s += i;
} console.log(s);