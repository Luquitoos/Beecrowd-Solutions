var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split("\n");

for (let i = 0; i < lines.length; i++) {
  let [x, y] = lines[i].split(" ").map(Number);
  let soma = 0;
  let sequence = ''
  
  if (x < 0 || y < 0 || x === 0 || y === 0) {
    break;
  }else if (x > y) {
    for (let i = y; i <= x; i++) {
      soma += i;
      sequence = sequence + i + ` `
    }
  } else if (x < y) {
    for (let i = x; i <= y; i++) {
      soma += i;
      sequence = sequence + i + ` `
    }
  } else if (x === y) {
    soma += x;
    sequence = x + ` `
  }
  console.log(sequence +`Sum=` + soma);
}