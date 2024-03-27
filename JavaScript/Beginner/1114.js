var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split(`\n`).map(Number)


for (let i = 0; i < lines.length; i++) {
    if (lines[i] !== 2002) {
        console.log('Senha Invalida')
    }
    else if (lines[i] === 2002) {
        console.log('Acesso Permitido')
        break;
    }
}