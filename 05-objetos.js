// ========================================================
// MÓDULO 5 — OBJETOS
// ========================================================
// Array = lista de coisas. Objeto = descreve UMA coisa,
// com pares chave: valor.
//
//   const carro = {
//     marca: "Fiat",     // chave: marca, valor: "Fiat"
//     ano: 2022,
//     ligado: false
//   };
//
// Acessar:      carro.marca        -> "Fiat"
// Alterar:      carro.ano = 2023;
// Criar chave:  carro.cor = "prata";
//
// Objetos e arrays se combinam — é assim que APIs devolvem
// dados de verdade:
//   const carros = [ {marca: "Fiat"}, {marca: "VW"} ];
//   carros[0].marca -> "Fiat"

// --- EXEMPLO ---
const usuario = {
  nome: "Lorenzo",
  idade: 20,
  dev: true,
};

console.log(usuario.nome);              // Lorenzo
usuario.idade = 21;                     // alterando
console.log(`${usuario.nome} tem ${usuario.idade} anos`);

// ========================================================
// ✏️ EXERCÍCIO 1
// Crie um objeto `celular` com as chaves: marca, modelo e
// preco. Mostre: "O <marca> <modelo> custa R$ <preco>"


// ========================================================
// ✏️ EXERCÍCIO 2
// No objeto `celular`: dê um desconto de 10% no preco
// (altere a chave) e adicione uma chave nova `emPromocao`
// com valor true. Mostre o objeto inteiro no console.


// ========================================================
// ✏️ EXERCÍCIO 3
// Percorra o array de objetos abaixo com um for e mostre:
// "<titulo> - nota <nota>"

const jogos = [
  { titulo: "Zelda", nota: 10 },
  { titulo: "FIFA", nota: 7 },
  { titulo: "Minecraft", nota: 9 },
];


// ========================================================
// ✏️ EXERCÍCIO 4 (desafio)
// Usando o array `jogos`:
// a) Some as notas e mostre a MÉDIA.
// b) Mostre o título do jogo com a MAIOR nota.
// (junte o que aprendeu no módulo 4!)
