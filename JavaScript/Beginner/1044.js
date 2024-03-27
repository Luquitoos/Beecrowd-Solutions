var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a,b] = input.split(' ').map(Number)
var resto = (b%a)

if (a>b){
resto = (a%b)}
  if (resto === 0){
console.log('Sao Multiplos')
}else{ console.log('Nao sao Multiplos')}