const leia = require("prompt-sync")();

let codigos = ["COD001", "COD002", "COD003", "COD004", "COD005"];
let produtos = ["Teclado", "Mouse  ", "Monitor", "Cadeira", "CPUGame"];
let valor = [20, 10, 150, 700, 800];
let estoque = [0, 0, 0, 0, 0];
let vendas = [0, 0, 0, 0, 0];

console.log("COD\t\tPRODUTO\t\tVALOR\t\tESTOQUE");
console.log("----------------------------------------------------");
for (let i = 0; i < codigos.length; i++) {
  console.log(
    codigos[i] + "\t\t" + produtos[i] + "\t\t" + valor[i] + "\t\t" + estoque[i]
  );
}
console.log("----------------------------------------------------");

console.log("CADASTRAMENTO DE ESTOQUE");
for (let i = 0; i < codigos.length; i++) {
  console.log(codigos[i] + "-" + produtos[i]);
  estoque[i] = parseInt(leia("Dogite o valor de estoque: "));
}

console.log("COD\t\tPRODUTO\t\tVALOR\t\tESTOQUE");
console.log("----------------------------------------------------");
for (let i = 0; i < codigos.length; i++) {
  console.log(
    codigos[i] + "\t\t" + produtos[i] + "\t\t" + valor[i] + "\t\t" + estoque[i]
  );
}
console.log("----------------------------------------------------");

console.log("PROCESSO DE VENDA");
let auxCod = leia(
  "Digite o código do produto que deseja comprar: "
).toUpperCase();

for (let i = 0; i < codigos.length; i++) {
  if (auxCod == codigos[i]) {
    console.log(codigos[i] + " - " + produtos[i] + " estoque: " + estoque[i]);
    vendas[i] = parseInt(leia("Digite a quantidade que deseja comprar: "));
    console.log("Total da compra: " + vendas[i] * valor[i]);
    estoque[i] = estoque[i] - vendas[i];
  }
}
console.log("COD\t\tPRODUTO\t\tVALOR\t\tESTOQUE");
console.log("----------------------------------------------------");
for (let i = 0; i < codigos.length; i++) {
  console.log(
    codigos[i] + "\t\t" + produtos[i] + "\t\t" + valor[i] + "\t\t" + estoque[i]
  );
}
console.log("----------------------------------------------------");
