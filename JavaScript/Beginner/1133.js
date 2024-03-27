var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a, b] = input.trim().split(`\n`).map(Number)

if (a < b) {
    for (let i = a +=1; i < b; i++) {
        if (i % 5 === 2 || i % 5 === 3) {
            console.log(i)
        }
    }
}
else if (b < a) {
    for (let i = b += 1; i < a; i++) {
        if (i % 5 === 2 || i % 5 === 3) {
            console.log(i)
        }
    }
}