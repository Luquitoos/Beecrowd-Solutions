var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split(`\n`).map(Number)

let quantidade = 0
let notas = 0

for (let i = 0; i < lines.length && quantidade< 2; i++) {
    if (lines[i] <= 10 && lines[i] >= 0) {
        notas += lines[i]
        quantidade++
    } else { console.log(`nota invalida`) }
}
console.log('media = '+ (notas / quantidade).toFixed(2))