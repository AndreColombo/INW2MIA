const readline = require('readline');

class Produto {
  constructor(id, descricao, ativo, estoque, preco, peso, dataFeito) {
    this.id = id;
    this.descricao = descricao;
    this.ativo = ativo;
    this.estoque = estoque;
    this.preco = preco;
    this.peso = peso;
    this.dataFeito = dataFeito;
  }

  ativar() {
    this.ativo = true;
  }

  retirarEstoque(quantidade) {
    if (this.estoque >= quantidade) {
      this.estoque -= quantidade;
    } else {
      console.log("Estoque insuficiente.");
    }
  }

  incluirEstoque(quantidade) {
    this.estoque += quantidade;
  }
}

function realizarCompra() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Deseja fazer uma compra? (sim/não): ", resposta => {
    if (resposta.toLowerCase() === 'sim') {
      rl.question("Digite a descrição do produto: ", descricao => {
        rl.question("Digite o preço do produto: ", preco => {
          const novoProduto = new Produto(1, descricao, true, 10, parseFloat(preco), "500g", "Ontem");
          console.log("Cadastro feito.");
          console.log("Produto:", novoProduto.descricao);
          console.log("Preço:", novoProduto.preco.toFixed(2));
          console.log("=================================");
          
          const movimentos = [];
          let totalCompra = 0;
  
          const realizarMovimento = () => {
            rl.question("Digite a quantidade de pães que deseja comprar: ", quantidade => {
              quantidade = parseInt(quantidade);
              if (!isNaN(quantidade) && quantidade >= 0) {
                const movimento = { quantidade };
                movimentos.push(movimento);
  
                const valorCompra = quantidade * novoProduto.preco;
                totalCompra += valorCompra;
  
                console.log("----- Movimento de compra", movimentos.length, "-----");
                console.log("Quantidade:", quantidade);
                console.log("Valor total da compra:", valorCompra.toFixed(2));
                console.log("Saldo atual do estoque:", novoProduto.estoque - quantidade);
  
                novoProduto.retirarEstoque(quantidade);
  
                if (movimentos.length < 5) {
                  realizarMovimento();
                } else {
                  console.log("----- Movimento de inclusão de estoque -----");
                  console.log("Estoque atual:", novoProduto.estoque);
                  console.log("Total da compra:", totalCompra.toFixed(2));
  
                  rl.question("Digite a quantidade de pães que deseja incluir no estoque (limite: 10): ", quantidadeIncluir => {
                    quantidadeIncluir = parseInt(quantidadeIncluir);
                    if (!isNaN(quantidadeIncluir) && quantidadeIncluir >= 0 && quantidadeIncluir <= 10) {
                      novoProduto.incluirEstoque(quantidadeIncluir);
                      console.log(`Foram incluídos ${quantidadeIncluir} pães no estoque.`);
                      console.log("Estoque final:", novoProduto.estoque);
                    } else {
                      console.log("Quantidade inválida. O estoque não foi alterado.");
                    }
                    console.log("=================================");
                    rl.close();
                  });
                }
              } else {
                console.log("Quantidade inválida. Tente novamente.");
                realizarMovimento();
              }
            });
          };
  
          realizarMovimento();
        });
      });
    } else if (resposta.toLowerCase() === 'não') {
      console.log("Operação finalizada.");
      rl.close();
    } else {
      console.log("Resposta inválida. Operação finalizada.");
      rl.close();
    }
  });
}

realizarCompra();