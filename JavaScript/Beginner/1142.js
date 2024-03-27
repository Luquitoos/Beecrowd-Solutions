var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');
let t = lines.shift()
let n1 = 1;
let n2 = 2;
let n3 = 3;

for (let i = 0; i < t; i++) {
    console.log(`${n1} ${n2} ${n3} PUM`)
    n1 += 4; n2 += 4; n3 += 4;
}