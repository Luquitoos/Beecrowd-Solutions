var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [a, b, c] = input.split(/\s+/)

switch (a) {
    case 'vertebrado':
        if (b === 'mamifero' && c === 'onivoro') {
            console.log('homem');
        } else if (b === 'mamifero' && c === 'herbivoro') {
            console.log('vaca');
        } else if (b === 'ave' && c === 'carnivoro') {
            console.log('aguia');
        } else if (b === 'ave' && c === 'onivoro') {
            console.log('pomba');
        }
        break;
    case 'invertebrado':
        if (b === 'inseto' && c === 'hematofago') {
            console.log('pulga');
        } else if (b === 'inseto' && c === 'herbivoro') {
            console.log('lagarta');
        } else if (b === 'anelideo' && c === 'hematofago') {
            console.log('sanguessuga');
        } else if (b === 'anelideo' && c === 'onivoro') {
            console.log('minhoca');
        }
        break;
}