const leia = require("prompt-sync")();

const at = parseInt(leia("Nota da AT: "));
const ac = parseInt(leia("Nota da AC: "));
const agh = parseInt(leia("Nota da AGH: "));

const mediaTri = (at * 5 + ac * 3 + agh * 2) / 10;

console.log("Média Trimestral: " + mediaTri);

console.log("-----------------------");

const triUm = parseInt(leia("Média do 1ºTri: "));
const triDois = parseInt(leia("Média do 2ºTri: "));
const triTres = parseInt(leia("Média do 3ºTri: "));

const mediaAno = (triUm * 1 + triDois * 2 + triTres * 3) / 6;

console.log("Média Anual: " + mediaAno);
