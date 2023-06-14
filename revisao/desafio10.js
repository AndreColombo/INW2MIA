// fazer um programa que receba a digitação de numeros do usuário
// até que o usuário digite um número negativo
// ao final mostra
// a soma dos números
// a qtde de números lidos
// o maior número digitado

const leia = require("prompt-sync")();
let numero = 0;
let total = 0;
let maior = 0;
let contador = -1;

while (numero >= 0) {
  total += numero;
  if (numero > maior) {
    maior = numero;
  }
  contador++;
  numero = parseInt(leia("Digite um número: "));
}
console.log("O total é: " + total);
console.log("O maior número é: " + maior);
console.log("QTDE: " + contador);
console.log("fim do programa!!!");