const leia = require("prompt-sync")();

let numero1;
let numero2;
let soma;
let sub;
let divi;
let mult;

numero1 = parseInt(leia("Digite o primeiro número: "));
numero2 = parseInt(leia("Digite o segundo número: "));

soma = numero1 + numero2;
sub = numero1 - numero2;
mult = numero1 * numero2;
divi = numero1 / numero2;

console.log("O resultado da soma é: " + soma);
console.log("O resultado da subtração é: " + sub);
console.log("O resultado da multiplicação é: " + mult);
console.log("O resultado da divisão é: " + divi);

let numero;
numero = parseInt(leia("Digite um número: "));

console.log("Raiz Quadrada " + Math.sqrt(numero));
console.log("Ao cubo " + Math.pow(numero, 3));