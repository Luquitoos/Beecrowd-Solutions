var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [n] = input.split('/\s+/').map(Number)

if (n > 5 && n < 2000) {
  for (let i = 2; i <= n; i += 2) {
    console.log(`${i}^2 = ` + (i ** 2))
  }
}