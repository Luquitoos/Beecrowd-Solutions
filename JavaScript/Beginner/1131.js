var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n')
let gremio = 0
let inter = 0
let empates = 0
let grenais = 0

for (let i = 0; i < lines.length; i++) {
    const [p, g] = lines[i].trim().split(/\s+/).map(Number)
    if (i % 2 === 1) {
        console.log('Novo grenal (1-sim 2-nao)')
        if (lines[i] === '2') {
            break;
        }
    }
    if (g > p) {
        gremio++
        grenais++
    } else if (p > g) {
        inter++
        grenais++
    } else if (p === g) {
        empates++
    }
}

if (gremio > inter) {
    console.log(grenais + ' grenais' + '\n' + 'Inter:' + inter + '\n' + 'Gremio:' + gremio + '\n' + 'Empates:' + empates + '\n' + 'Gremio venceu mais')
} else if (inter > gremio) {
    console.log(grenais + ' grenais' + '\n' + 'Inter:' + inter + '\n' + 'Gremio:' + gremio + '\n' + 'Empates:' + empates + '\n' + 'Inter venceu mais')
} else if (gremio === inter) {
    console.log(grenais + ' grenais' + '\n' + 'Inter:' + inter + '\n' + 'Gremio:' + gremio + '\n' + 'Empates:' + empates + '\n' + 'Não houve vencedor')
}