const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n').map(Number);

let maior = lines[0];
let p = 0;

for (let i = 1; i < 100; i++) {
    if (lines[i] > maior) {
        maior = lines[i];
        p = i;
    }
}
console.log(maior);
console.log(p + 1);