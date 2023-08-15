const leia = require("prompt-sync")();
let auxMat;
let indice = -1;

let matricula = ["M01", "M02", "M03", "M04"];
let nome = ["Paulo", "Maria", "Pedro", "Marcos"];
let nota = [0, 0, 0, 0];

//LISTA OS DADOS NA TELA

console.log("MATRICULA\tNOME\tNOTA");

for (let i = 0; i < matricula.length; i++) {
  console.log(matricula[i] + "\t\t" + nome[i].toUpperCase() + "\t" + nota[i]);
}

auxMat = leia("Digite a matricula do aluno: ").toUpperCase();
console.log(auxMat);

for (let i = 0; i < matricula.length; i++) {
  if (auxMat == matricula[i]) {
    indice = i;
  }
}
if (indice != -1) {
  console.log("O aluno escolhido foi: " + nome[indice]);
  nota[indice] = leia("Digite a notado aluno entre 1-10: ");
  if (nota[indice] < 6) {
    console.log(
      nome[indice] + " Sua nota é: " + nota[indice] + ", está de recuperação"
    );
  } else {
    console.log(
      nome[indice] + " Sua nota é: " + nota[indice] + ", está aprovado"
    );
  }
}

//CADASTRA UMA NOTA DE ALUNO ESPECIFICO

// console.log("MAT\tALUNO\tNOTA\tSITUAÇÂO");

// for (let i = 0; i < alunos.length; i++) {
//   if (notas[i] <= 6) {
//     situacao = "Reprovado";
//   } else {
//     situacao = "Apovado";
//   }

//   console.log(
//     matriculas[i] + "\t" + alunos[i] + "\t" + notas[i] + "\t" + situacao
//   );
// }

// console.log("MAT\tALUNO\tNOTA\tSITUAÇÂO");

// for (let i = 0; i < alunos.length; i++) {
//   if (notas[i] >= 5) {
//     situacao = "Aprovado";
//   } else {
//     situacao = "Reprovado";
//   }

//   console.log(
//     matriculas[i] + "\t" + alunos[i] + "\t" + notas[i] + "\t" + situacao
//   );
// }
