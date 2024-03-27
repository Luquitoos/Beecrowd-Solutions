var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a, b] = input.trim().split(`\n`).map(Number)

var soma = 0
if (a < b) {
    for (let i = a; i <= b; i++) {
        if (i % 13 !== 0) {
            soma += i
        }
    }
}
else if (b < a) {
    for (let i = b; i <= a; i++) {
        if (i % 13 !== 0) {
            soma += i
        }
    }
}
console.log(soma)