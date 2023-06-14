const leia = require("prompt-sync")();

let aluno = leia("Digite o nome do aluno: ");
let nota = parseInt(leia("Digite a nota do aluno [1-10]: "));
// let Genero = leia("Aluno[M], Aluna[F]: ");

if (nota > 5) {
  console.log("Oi " + aluno + ", continue assim");
} else {
  console.log("Oi " + aluno + ", ainda não, recuperação");
}

// if (Genero == "M") {
//   if (nota > 5) {
//     console.log("Oi aluno " + aluno + ", continue assim");
//   } else {
//     console.log("Oi aluno " + aluno + ", ainda não, recuperação");
//   }
// }

// if (Genero == "F") {
//   if (nota > 5) {
//     console.log("Oi aluna " + aluno + ", continue assim");
//   } else {
//     console.log("Oi aluna " + aluno + ", ainda não, recuperação");
//   }
// }