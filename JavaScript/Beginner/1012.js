var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a,b,c] = input.split(' ').map(Number)

var t = (a * c) / 2;
t = t.toFixed(3);

var cir = 3.14159 * c ** 2;
cir = cir.toFixed(3);

var tr = ((a + b) * c) / 2;
tr = tr.toFixed(3);

var s = b ** 2;
s = s.toFixed(3);

var r = a * b;
r = r.toFixed(3);

console.log(
  'TRIANGULO: ' + t + '\n' +
  'CIRCULO: ' + cir + '\n' +
  'TRAPEZIO: ' + tr + '\n' +
  'QUADRADO: ' + s + '\n' + 
  'RETANGULO: ' + r);