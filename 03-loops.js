// ========================================================
// MÓDULO 3 — LOOPS (repetição)
// ========================================================
// for -> quando você SABE quantas vezes repetir:
//
//   for (let i = 0; i < 5; i++) { ... }
//        │          │        └ soma 1 em i a cada volta
//        │          └ repete ENQUANTO isso for true
//        └ começa em 0
//
// while -> quando você só sabe a CONDIÇÃO de parada:
//
//   while (vidas > 0) { ... }
//
// CUIDADO: se a condição nunca virar false = loop infinito!

// --- EXEMPLO ---
// for (let i = 1; i <= 3; i++) {
//   console.log(`Volta número ${i}`);
// }
// Volta número 1
// Volta número 2
// Volta número 3

// ========================================================
// ✏️ EXERCÍCIO 1
// Use um for para mostrar os números de 1 a 10 no console.
// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// ========================================================
// ✏️ EXERCÍCIO 2
// Contagem regressiva de foguete: mostre 5, 4, 3, 2, 1
// e depois "🚀 Decolar!".
// Dica: dá pra fazer o for de trás pra frente com i--
// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }
// console.log("🚀 Decolar!");
// ========================================================
// ✏️ EXERCÍCIO 3
// Tabuada: crie uma variável `n` e mostre a tabuada dela.
// Para n = 7 a saída deve ser:
//   7 x 1 = 7
//   7 x 2 = 14
//   ... até 7 x 10 = 70
const n = 7;
for (let i = 1; i <= 10; i++) {
  let resultado = n * i;
  console.log(`${n} x ${i} = ${resultado}`);
}

// ========================================================
// ✏️ EXERCÍCIO 4
// Some todos os números de 1 até 100 usando um loop.
// Dica: crie let soma = 0 ANTES do loop e vá acumulando.
// Resposta certa: 5050

// ========================================================
// ✏️ EXERCÍCIO 5 (desafio - FizzBuzz, clássico de entrevista!)
// Mostre os números de 1 a 30, mas:
//   - múltiplo de 3          -> mostre "Fizz" no lugar
//   - múltiplo de 5          -> mostre "Buzz" no lugar
//   - múltiplo de 3 E de 5   -> mostre "FizzBuzz"
// Dica: teste o caso "3 E 5" PRIMEIRO no if.
