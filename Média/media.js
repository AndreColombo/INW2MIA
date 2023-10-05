const leia = require("prompt-sync")();

const at = parseInt(leia("Digite a nota da AT: "));
const ac = parseInt(leia("Digite a nota da AC: "));
const agh = parseInt(leia("Digite a nota da AGH: "));

const mediaTri = (at * 5 + ac * 3 + agh * 2) / 10;

console.log("Sua média Trimestral é: " + mediaTri);

console.log("-----------------------");

const triUm = parseInt(leia("Digite a média do 1ºTri: "));
const triDois = parseInt(leia("Digite a média do 2ºTri: "));
const triTres = parseInt(leia("Digite a média do 3ºTri: "));

const mediaAno = (triUm * 1 + triDois * 2 + triTres * 3) / 6;

console.log("Sua média Anual é: " + mediaAno);