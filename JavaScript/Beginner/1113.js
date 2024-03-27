var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; i < lines.length; i++) {
    const [x, y] = lines[i].trim().split(` `).map(Number)
    if (x > y) {
        console.log(`Decrescente`)
    } else if (x < y) { console.log(`Crescente`)}
    else{break;}
}