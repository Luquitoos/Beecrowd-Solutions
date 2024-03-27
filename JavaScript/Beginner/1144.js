var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let t = lines.shift()

for (let i = 1; i <= t; i++){
    console.log(`${i} ${i**2} ${i**3}\n${i} ${(i**2)+1} ${(i**3)+1}`);
  }