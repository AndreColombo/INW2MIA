const leia = require("prompt-sync")();

let A;
let B;
let C;

A = parseInt(leia("Digite o valor de A: "));
B = parseInt(leia("Digite o valor de B: "));
C = parseInt(leia("Digite o valor de C: "));

let R;
let S;

R = Math.pow(A + B, 2);
S = Math.pow(B + C, 2);

let D;

D = (R + S) / 2;

console.log("O valor de D: " + D);