console.log("--------------------------------------------------");
// Criação da Função Normal
function escreverNoConsole() {
  console.log("Primeiro Exemplo - Função Normal");
}
// Chamar a Função para Executar
escreverNoConsole();
console.log("--------------------------------------------------");

// Variação de Função Normal ou Declarada
const escreverNoConsoleVariacao = function () {
  console.log("Segundo Exemplo - Variação da Função Normal");
};
// Chamar a Função para Executar
escreverNoConsoleVariacao();
console.log("--------------------------------------------------");

// Arrow Function - Função Seta ou Flecha
//    Toda arrow function usa os caracteres = junto com >
const escreverComArrow = () => {
  console.log("Terceiro Exemplo - Arrow Function");
};
// Chamar a Função para Eexecutar
escreverComArrow();
console.log("--------------------------------------------------");

// Arrow Function => com ParÂmetro
const escreverComArrowParametro = (texto1) => {
  console.log(texto1);
}; // se tiver apenas um parâmetro pode ser omitido as chaves {}
// Chamar a Função para Executar
escreverComArrowParametro("Quarto exemplo - Arrow Function Usando Parâmetro");
escreverComArrow();
escreverComArrowParametro("Outro Texto");
console.log("--------------------------------------------------");

// Função Arrow que soma dois valores
const somarDois = (numero1, numero2) => {
  console.log("A soma é", /* , ou + */ numero1 + numero2);
};
// Chamar a Função para Executar
somarDois(10, 10);
console.log("--------------------------------------------------");

// Variação Arrow Function sem parenteses () e sem chaves {}
const varianteArrow = texto2 => console.log(texto2);

// parImpar.js
