var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a, b, c] = input.split(/\s+/).map(Number);

var na = a >= (b + c);
var nb = b >= (a + c);
var nc = c >= (b + a);

var ra = a ** 2 === ((b ** 2) + (c ** 2));
var rb = b ** 2 === ((a ** 2) + (c ** 2));
var rc = c ** 2 === ((b ** 2) + (a ** 2));

var oa = a ** 2 > ((b ** 2) + (c ** 2));
var ob = b ** 2 > ((a ** 2) + (c ** 2));
var oc = c ** 2 > ((b ** 2) + (a ** 2));

var aca = a ** 2 < ((b ** 2) + (c ** 2));
var acb = b ** 2 < ((a ** 2) + (c ** 2));
var acc = c ** 2 < ((b ** 2) + (a ** 2));

if (na || nb || nc) {
    console.log('NAO FORMA TRIANGULO');
} else if (ra || rb || rc) { 
    console.log('TRIANGULO RETANGULO');
    if (a === b && b === c) {
        console.log('TRIANGULO EQUILATERO');
    } else if (a === b || b === c || a === c) {
        console.log('TRIANGULO ISOSCELES');
    }
} else if (oa || ob || oc) {
    console.log('TRIANGULO OBTUSANGULO');
    if (a === b && b === c) {
        console.log('TRIANGULO EQUILATERO');
    } else if (a === b || b === c || a === c) {
        console.log('TRIANGULO ISOSCELES');
    }
} else if (aca && acb && acc) {
    console.log('TRIANGULO ACUTANGULO');
    if (a === b && b === c) {
        console.log('TRIANGULO EQUILATERO');
    } else if (a === b || b === c || a === c) {
        console.log('TRIANGULO ISOSCELES');
    }
}