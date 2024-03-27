var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');
let t = lines.shift()

for (let i = 1; i <= t; i++){
    console.log(`${i} ${i**2} ${i**3}`);
  }
