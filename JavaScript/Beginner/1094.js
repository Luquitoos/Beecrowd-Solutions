var lines = input.split('\n');

const t = parseInt(lines.shift())
let coelhos = 0, ratos = 0, sapos = 0;

for (let i = 0; i < t; i++) {
    const [nu, ani] = lines[i].trim().split(' ');

    coelhos += ani === 'C' ? parseInt(nu) : 0;
    ratos += ani === 'R' ? parseInt(nu) : 0;
    sapos += ani === 'S' ? parseInt(nu) : 0;
}

const total = coelhos + ratos + sapos;
const porC = ((coelhos / total) * 100).toFixed(2);
const porR = ((ratos / total) * 100).toFixed(2);
const porS = ((sapos / total) * 100).toFixed(2);

console.log(`Total: ${total} cobaias\nTotal de coelhos: ${coelhos}\nTotal de ratos: ${ratos}\nTotal de sapos: ${sapos}\nPercentual de coelhos: ${porC} %\nPercentual de ratos: ${porR} %\nPercentual de sapos: ${porS} %`)