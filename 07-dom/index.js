// ========================================================
// MÓDULO 7 — DOM (JavaScript no navegador)
// ========================================================
// DOM = a página HTML vista pelo JavaScript como objetos.
// Com ele, o JS lê e ALTERA a página em tempo real.
//
// Selecionar elemento (igual seletor de CSS):
//   const el = document.querySelector("#meuId");
//   // "#id"  ".classe"  "button"  etc.
//
// Alterar:
//   el.textContent = "novo texto";
//   el.style.color = "red";
//   el.classList.toggle("minha-classe"); // liga/desliga classe
//
// Reagir a eventos:
//   el.addEventListener("click", () => {
//     // roda toda vez que clicarem em el
//   });
//
// Ler o que o usuário digitou num <input>:
//   const input = document.querySelector("#campo");
//   input.value  // -> texto digitado

// --- EXEMPLO RESOLVIDO (botão 1) ---
const titulo = document.querySelector("#titulo");
const btnMudarTexto = document.querySelector("#btn-mudar-texto");

btnMudarTexto.addEventListener("click", () => {
  titulo.textContent = "Texto mudado com JS! 🎉";
});

// ========================================================
// ✏️ EXERCÍCIO 1
// Faça o botão #btn-destacar adicionar/remover a classe
// "destaque" no parágrafo .mensagem (use classList.toggle).


// ========================================================
// ✏️ EXERCÍCIO 2
// Faça o botão #btn-tema alternar a classe "escuro" no
// document.body (sim, o body também é um elemento!).


// ========================================================
// ✏️ EXERCÍCIO 3 — Contador
// Faça #btn-mais somar 1 e #btn-menos subtrair 1 no número
// mostrado em #contador.
// Dica: guarde o valor numa variável `let contador = 0` e
// atualize o textContent do span a cada clique.


// ========================================================
// ✏️ EXERCÍCIO 4 (desafio) — Saudação
// Ao clicar em #btn-saudar:
//   - leia o que foi digitado em #campo-nome (.value)
//   - se estiver vazio, mostre "Digite um nome!" em #saudacao
//   - senão, mostre "Olá, <nome>! 👋" em #saudacao
