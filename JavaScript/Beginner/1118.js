const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n').map(Number);

let limite = 0;
let n1, n2, media;

for (let i = 0; i < lines.length; i++) {
  const nota = lines[i];
  if (nota >= 0 && nota <= 10) {
    limite++;

    if (limite === 1) {
      n1 = nota;
    } else if (limite === 2) {
      n2 = nota;
      media = (n1 + n2) / 2;
      console.log("media = " + media.toFixed(2));
    } else if (limite > 2 && nota === 2) {
      console.log("novo calculo (1-sim 2-nao)");
      break;
    }
  } else if (limite < 2) {
    if (nota > 10) {
      console.log("nota invalida");
    } else if (nota < 0) {
      console.log("nota invalida");
    }
  }

  if (limite > 2) {
    console.log("novo calculo (1-sim 2-nao)");
  }

  if (nota === 1 && limite > 2) {
    limite = 0;
  }
}