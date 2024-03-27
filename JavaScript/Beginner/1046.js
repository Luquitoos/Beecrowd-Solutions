var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var[a,b] = input.split(' ').map(Number)
var tempo = 24 - (a-b)

if (b>a)
    tempo = b-a
console.log('O JOGO DUROU '+ tempo +' HORA(S)')