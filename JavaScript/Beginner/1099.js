var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split("\n");

let n = lines.shift();

for (let j = 0; j < n; j++) {
  let [x, y] = lines[j].trim().split(" ").map(Number);
  let sum = 0;
  let i = 0;

  if (x < y) {
    i = x + 1;
    for (i; i < y; i++) {
      if (i % 2 !== 0) {
        sum += i;
      }
    }
  } else {
    i = y + 1;
    for (i; i < x; i++) {
      if (i % 2 !== 0) {
        sum += i;
      }
    }
  }

  console.log(sum);
}