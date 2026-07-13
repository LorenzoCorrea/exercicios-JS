// ========================================================
// MÓDULO 4 — ARRAYS (listas)
// ========================================================
// Array = lista ordenada de valores. Índice começa em 0!
//
//   const frutas = ["maçã", "banana", "uva"];
//                     0        1        2
//
//   frutas[0]        -> "maçã"
//   frutas.length    -> 3
//   frutas[frutas.length - 1] -> último item ("uva")
//
// Métodos essenciais:
//   frutas.push("kiwi")   -> adiciona no FIM
//   frutas.pop()          -> remove do FIM
//   frutas.includes("uva")-> true/false, existe na lista?
//   frutas.indexOf("uva") -> posição do item (-1 se não existe)
//
// Percorrer um array com for:
//   for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
//   }

// --- EXEMPLO ---
const linguagens = ["HTML", "CSS"];
linguagens.push("JavaScript");
console.log(linguagens);        // ["HTML", "CSS", "JavaScript"]
console.log(linguagens.length); // 3

// ========================================================
// ✏️ EXERCÍCIO 1
// Crie um array `filmes` com 3 filmes que você gosta.
// Mostre: o primeiro, o último (usando length - 1) e o
// tamanho da lista.


// ========================================================
// ✏️ EXERCÍCIO 2
// No array `filmes`: adicione um 4º filme com push,
// depois remova o último com pop. Mostre o array no final
// e confira se voltou a ter 3 filmes.


// ========================================================
// ✏️ EXERCÍCIO 3
// Percorra o array abaixo com um for e mostre cada nome
// no formato: "Aluno(a): <nome>"

const alunos = ["Ana", "Bruno", "Carla", "Diego"];


// ========================================================
// ✏️ EXERCÍCIO 4
// Encontre o MAIOR número do array abaixo usando um loop.
// Dica: crie let maior = numeros[0] e compare com cada item.
// Resposta certa: 87

const numeros = [12, 5, 87, 33, 41];


// ========================================================
// ✏️ EXERCÍCIO 5 (desafio)
// Some apenas os números PARES do array `numeros` acima.
// (12 + 87? não! 87 é ímpar... pense bem)
// Resposta certa: 12
