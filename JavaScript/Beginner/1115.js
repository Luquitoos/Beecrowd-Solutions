const i = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n').map(line => line.split(' ').map(Number));
for (let [x, y] of i) {
    if (x === 0 || y === 0) break;   
    const q = (x > 0 ? (y > 0 ? 'primeiro' : 'quarto') : (y > 0 ? 'segundo' : 'terceiro'));
    console.log(q);
}