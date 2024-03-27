var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [n1,n2,n3,n4,nr] = input.split(/\s+/).map(Number)

var no1 = n1*2
var no2 = n2*3
var no3 = n3*4
var no4 = n4*1

var media = (no1 + no2 + no3 + no4) / 10;
var mediaR = (media + nr) / 2;

console.log(`Media: ` + media.toFixed(1));

if (media >= 7) {
  console.log('Aluno aprovado.');
} else if (media < 5) {
  console.log('Aluno reprovado.');
} else if (5 <= media && media <= 6.9) {
  console.log('Aluno em exame.');
  console.log('Nota do exame: ' + nr.toFixed(1));

  if (mediaR >= 5) {
    console.log('Aluno aprovado.');
    console.log('Media final: ' + mediaR.toFixed(1));
  } else {
    console.log('Aluno reprovado.');
    console.log('Media final: ' + mediaR.toFixed(1));
  }
}