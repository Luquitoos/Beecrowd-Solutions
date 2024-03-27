var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const n = parseInt(lines[0]);
let d = 0;
let f = 0;

for (let i = 1; i <= n; i++) { 
  const x = parseInt(lines[i]);
  if (x < 10 || x > 20) { 
    if (x >= -Math.pow(10, 7) && x <= Math.pow(10, 7)) { 
      f++;
    }
  } else {
    d++;
  }
}

console.log(`${d} in`);
console.log(`${f} out`);