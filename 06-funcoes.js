// ========================================================
// MÓDULO 6 — FUNÇÕES
// ========================================================
// Função = bloco de código com nome, que você escreve UMA
// vez e usa quantas vezes quiser.
//
//   function somar(a, b) {     // a, b = parâmetros (entradas)
//     return a + b;            // return = devolve o resultado
//   }
//
//   const resultado = somar(2, 3); // chamando -> 5
//
// IMPORTANTE: return ≠ console.log
//   console.log só MOSTRA na tela.
//   return DEVOLVE o valor para ser usado em outro lugar.
//
// Arrow function (jeito moderno, muito usada em React):
//   const somar = (a, b) => {
//     return a + b;
//   };
//   // versão curta (retorno implícito, sem chaves):
//   const somar = (a, b) => a + b;

// --- EXEMPLO ---
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

const dobro = (n) => n * 2;

console.log(saudacao("Lorenzo")); // Olá, Lorenzo!
console.log(dobro(7));            // 14

// ========================================================
// ✏️ EXERCÍCIO 1
// Crie uma função `quadrado(n)` que RETORNA n ao quadrado.
// Teste: console.log(quadrado(5)) deve mostrar 25.


// ========================================================
// ✏️ EXERCÍCIO 2
// Crie uma função `ehMaiorDeIdade(idade)` que retorna
// true ou false. Teste com 15 e com 20.
// Dica: dá pra fazer em UMA linha (a comparação já É um booleano).


// ========================================================
// ✏️ EXERCÍCIO 3
// Refaça o exercício do PAR/ÍMPAR do módulo 2, mas agora
// como função: `parOuImpar(n)` retorna "par" ou "impar".
// Percebe como fica reutilizável? Teste com 3 números.


// ========================================================
// ✏️ EXERCÍCIO 4
// Converta para ARROW FUNCTION (versão curta de 1 linha):
//
// function triplo(n) {
//   return n * 3;
// }


// ========================================================
// ✏️ EXERCÍCIO 5 (desafio - junta TUDO do curso)
// Crie uma função `mediaDaTurma(alunos)` que recebe um array
// de objetos { nome, nota } e RETORNA a média das notas.
// Depois crie `aprovados(alunos)` que retorna um ARRAY só
// com os nomes de quem tem nota >= 7.

const turma = [
  { nome: "Ana", nota: 9 },
  { nome: "Bruno", nota: 5 },
  { nome: "Carla", nota: 7.5 },
  { nome: "Diego", nota: 6 },
];

// console.log(mediaDaTurma(turma)); // 6.875
// console.log(aprovados(turma));    // ["Ana", "Carla"]
