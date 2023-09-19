// Crie uma Arrow Function chamada parImpar que recebe
// um parâmetro numérico e informar na saída este número
// e mais um texto conforme a situação
// [número], este valor é negativo
// [número], este valor é neutro
// [número], este valor é par
// [número], este valor é ímpar

function parImpar() {
  const numero = -5;
  if (numero < 0) {
    console.log(numero + ", este valor é negativo");
  } else if (numero == 0) {
    console.log(numero + ", este valor é neutro");
  } else {
    if (numero % 2 == 0) {
      console.log(numero + ", este valor é par");
    } else {
      console.log(numero + ", este valor é ímpar");
    }
  }
}
parImpar();
