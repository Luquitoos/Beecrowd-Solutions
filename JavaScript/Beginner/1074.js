var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const numbers = input.trim().split(/\s+/).map(Number);

if (numbers.length < 10000) {
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0 && numbers[i] > -Math.pow(10,7) && numbers[i] < Math.pow(10,7)){
      if (numbers[i] > 0 && numbers[i] > -Math.pow(10,7) && numbers[i] < Math.pow(10,7)) {
        console.log(`EVEN POSITIVE`);
      } else if (numbers[i] < 0 && numbers[i] > -Math.pow(10,7) && numbers[i] < Math.pow(10,7)) {
        console.log(`EVEN NEGATIVE`);
      } else {
        console.log(`NULL`);
      }
    } else {
      if (numbers[i] > 0 && numbers[i] > -Math.pow(10,7) && numbers[i] < Math.pow(10,7)) {
        console.log(`ODD POSITIVE`);
      } else if (numbers[i] < 0 && numbers[i] > -Math.pow(10,7) && numbers[i] < Math.pow(10,7)) {
        console.log(`ODD NEGATIVE`);
      }
    }
  }
}