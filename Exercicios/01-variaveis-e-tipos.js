// ========================================================
// MÓDULO 1 — VARIÁVEIS E TIPOS
// ========================================================
// Variável = uma "caixinha" com nome que guarda um valor.
//
//   let   -> valor PODE mudar depois
//   const -> valor NÃO pode ser trocado (use sempre que der)
//   var   -> jeito antigo, não use
//
// Tipos principais:
//   "texto"  -> String  (sempre entre aspas)
//   42       -> Number  (inteiro ou decimal: 3.14)
//   true     -> Boolean (true ou false)
//
// typeof mostra o tipo de um valor:
//   console.log(typeof "oi"); // "string"

// --- EXEMPLO ---
// let idade = 20;
// const nome = "Lorenzo";
// idade = 21; // ok, let pode mudar
// // nome = "Outro"; // ERRO! const não pode ser reatribuída

// console.log(nome, idade); // Lorenzo 21

// // Template string: crase + ${} para misturar texto e variável
// console.log(`${nome} tem ${idade} anos`); // Lorenzo tem 21 anos

// ========================================================
// ✏️ EXERCÍCIO 1
// Crie uma const chamada `cidade` com o nome da sua cidade
// e um let chamado `ano` com o ano atual.
// Mostre no console: "Estou em <cidade> no ano <ano>"
// (use template string com crase)

// const cidade = "Porto Alegre";
// let ano = 2026;
// console.log(`Estou em ${cidade} no ano de ${ano}`);

// ========================================================
// ✏️ EXERCÍCIO 2
// Crie 3 variáveis: `produto` (string), `preco` (number com
// centavos, ex: 49.9) e `emEstoque` (boolean).
// Depois mostre o typeof de cada uma no console.
// Saída esperada: string, number, boolean

// let produto = "sabonete";
// const preco = 2.5;
// let estoque = true;

// console.log(typeof "Sabonete");
// console.log(typeof 2.5);
// console.log(typeof true);

// ========================================================
// ✏️ EXERCÍCIO 3
// O código abaixo tem 2 erros. Descomente, encontre e corrija.

const pontos = 10;
const pontosSoma = pontos + 5;
console.log(`Total de pontos: ${pontosSoma}`);

// ========================================================
// ✏️ EXERCÍCIO 4 (desafio)
// Sem rodar, tente prever o que cada linha imprime.
// Escreva sua resposta no comentário, DEPOIS rode e confira.

console.log(typeof "123"); // sua resposta: string
console.log(typeof 123); // sua resposta: number
console.log(typeof true); // sua resposta: bool
console.log(typeof cidade); // sua resposta: erro
