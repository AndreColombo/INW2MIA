const leia = require("prompt-sync")();

let X1;
let Y1;
let X2;
let Y2;

X1 = parseInt(leia("Digite o valor de X1: "));
X2 = parseInt(leia("Digite o valor de X2: "));
Y1 = parseInt(leia("Digite o valor de Y1: "));
Y2 = parseInt(leia("Digite o valor de Y2: "));

let d;

d = Math.sqrt(Math.pow(X2 - X1, 2) + Math.pow(Y2 - Y1, 2));

// ou

// let X
// let Y

// X = (Math.pow(X2-X1,2))
// Y = (Math.pow(Y2-Y1,2))

// let d

// d = (Math.sqrt(X+Y))

console.log("A distância d: " + d);