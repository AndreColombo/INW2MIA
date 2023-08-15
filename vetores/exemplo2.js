const leia = require("prompt-sync")();

//variaveis
let cod = ["C1", "C2", "C3"];
let descricao = ["Calça", "Camisa", "Saia"];
let valor = [100.0, 60.5, 200.25];
let estoque = [0, 0, 0];
let movimento = [0, 0, 0];
let opcaoMenuPrincipal = "";
let opcaoSubMenu = "";
let auxCod = "";
let posicao = -1;

//programa principal
while (opcaoMenuPrincipal != "2") {
  console.log("LOJA XXX\n\n");
  console.log("MENU PRINCIPAL");
  console.log("1 - Opções");
  console.log("2 - Sair");
  opcaoMenuPrincipal = leia("Digite o número da sua opção: ");
  if (opcaoMenuPrincipal == "1") {
    opcaoSubMenu = "";
    //SUB-MENU REFERENTE AS OPÇÕES
    while (opcaoSubMenu != "6") {
      console.log("SUB-MENU");
      console.log("1 - MOSTRAR OS REGISTRO");
      console.log("2 - ALTERAR OS REGISDTROS");
      console.log("3 - CODASTRAR OS REGISTRO");
      console.log("4 - EXCLUIR UM REGISTRO");
      console.log("5 - CARRINHO DE COMPRAS");
      console.log("6 - SAIR");
      opcaoSubMenu = leia("Digite o número da sua opção: ");
      if (opcaoSubMenu == 1) {
        console.log("COD\tDESCRIÇÃO\tVALOR\tESTOQUE");
        for (let x = 0; x < cod.length; x++) {
          console.log(
            cod[x] + "\t" + descricao[x] + "\t\t" + valor[x] + "\t" + estoque[x]
          );
        }
      } else if (opcaoSubMenu == "2") {
        auxCod = leia(
          "Digite o código do produto que deseja alterar: "
        ).toUpperCase;
        for (let x = 0; x < cod.length; x++) {
          if (auxCod == cod[x]) {
            posicao = x;
          }
        }
        if (posicao == -1) {
          console.log("Produto não encontrado...");
        } else {
          cod[posicao] = leia("Digite o novo código: ");
          descricao[posicao] = leia("Digite a nova descrição: ");
          valor[posicao] = parseFloat(leia("Digite o novo valor: "));
          estoque[posicao] = parseInt(leia("Digite o novo preço: "));
        }
      }
    }
  }
}

//fim de prorama
console.log("Até breve!");
