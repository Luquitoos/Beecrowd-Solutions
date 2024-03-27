var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a,b,c,] = input.split(' ').map(Number)
var perimetro = a+b+c
var area = ((a+b)*c)/2
if (a + b > c && a + c > b && b + c > a){
console.log('Perimetro = ' + perimetro.toFixed(1))
}else console.log('Area = ' + area.toFixed(1))