const leia = require("prompt-sync")();

let alunos = ["", "", "", ""];
let notas = [0, 0, 0, 0];
let situacao = "";

for (let x = 0; x < alunos.length; x++) {
  alunos[x] = leia("Digite o nome do aluno(a): ");
  notas[x] = parseInt(leia("Digite a nota do aluno(a): "));
}

console.log("Boletim");
console.log("Nome\tnota\tsituação");
for (let x = 0; x < alunos.length; x++) {
  if (notas[x] < 5) {
    situacao = "Reprovado";
  } else {
    situacao = "Aprovado";
  }

  console.log(alunos[x] + "\t" + notas[x] + "\t" + situacao);
}
