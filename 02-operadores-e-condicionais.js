// ========================================================
// MÓDULO 2 — OPERADORES E CONDICIONAIS
// ========================================================
// Aritméticos:  +  -  *  /  %  (% = resto da divisão)
//   10 % 3  -> 1   (10 dividido por 3 sobra 1)
//   8 % 2   -> 0   (resto 0 = número PAR!)
//
// Comparação (sempre devolvem true ou false):
//   ===  igual (valor E tipo)  -> use este
//   !==  diferente
//   >  <  >=  <=
//
// Lógicos:
//   &&  E   -> os DOIS precisam ser true
//   ||  OU  -> basta UM ser true
//   !   NÃO -> inverte
//
// if / else if / else = o código toma decisões:

// // --- EXEMPLO ---
// const hora = 14;

// if (hora < 12) {
//   console.log("Bom dia!");
// } else if (hora < 18) {
//   console.log("Boa tarde!"); // <- cai aqui, hora é 14
// } else {
//   console.log("Boa noite!");
// }

// ========================================================
// ✏️ EXERCÍCIO 1
// Crie uma variável `numero` com qualquer valor.
// Se ele for PAR, mostre "par". Se for ÍMPAR, mostre "impar".
// Dica: use o operador %
// let numero = 10;

// if (numero % 2) {
//   console.log("É IMPAR");
// } else {
//   console.log("É PAR ");
// }

// ========================================================
// ✏️ EXERCÍCIO 2
// Crie uma variável `nota` (0 a 10) e mostre:
//   nota >= 7           -> "Aprovado"
//   nota >= 5 e < 7     -> "Recuperação"
//   nota < 5            -> "Reprovado"
// Teste com 8, 6 e 3 para conferir os três caminhos.

// const nota = 5;
// if (nota >= 7) {
//   console.log("Aprovado");
// } else if (nota >= 5 && 7) {
//   console.log("Recuperação");
// } else {
//   console.log("Reprovado");
// }

// ========================================================
// ✏️ EXERCÍCIO 3
// Cinema: entrada permitida se a pessoa tem 18 anos ou mais,
// OU se tem 16+ E está acompanhada (booleano `acompanhada`).
// Crie `idade` e `acompanhada` e mostre "Pode entrar" ou "Não pode".
// Dica: combine && e ||
const idade = 19;
let acompanhada = false;

if (idade >= 18) {
  console.log("Pode entrar");
} else if (idade >= 16 && acompanhada === true) {
  console.log("Pode entrar");
} else {
  console.log("Não pode entrar");
}

// ========================================================
// ✏️ EXERCÍCIO 4 (desafio)
// Sem rodar, preveja o resultado (true ou false) de cada linha.
// Depois rode e confira.

// console.log(5 === "5");        // sua resposta: false
// console.log(10 !== 9);         // sua resposta: true
// console.log(4 > 4);            // sua resposta: false
// console.log(true && false);    // sua resposta: false
// console.log(false || true);    // sua resposta: true
// console.log(!(3 < 5));         // sua resposta: true
