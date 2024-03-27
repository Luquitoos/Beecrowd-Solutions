var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [a, b, c, d] = input.split(' ').map(Number);

var hora1 = (a * 60) + b;
var hora2 = (c * 60) + d;


if (hora2 < hora1) {
  hora2 += 1440; 
}

var variação = Math.abs(hora2 - hora1);
var horatotal = Math.floor(variação / 60);
var minutototal = variação % 60;

if (a === b === c === d , horatotal === 0 && minutototal === 0) {
  console.log('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)');
} else {
  console.log('O JOGO DUROU ' + horatotal + ' HORA(S) E ' + minutototal + ' MINUTO(S)');}