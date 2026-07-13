# 🔑 Gabarito — só abra depois de tentar!

## Módulo 1 — Variáveis e Tipos

**Exercício 1**
```js
const cidade = "Porto Alegre";
let ano = 2026;
console.log(`Estou em ${cidade} no ano ${ano}`);
```

**Exercício 2**
```js
const produto = "Teclado";
const preco = 49.9;
const emEstoque = true;
console.log(typeof produto);   // string
console.log(typeof preco);     // number
console.log(typeof emEstoque); // boolean
```

**Exercício 3** — os 2 erros:
1. `pontos` é `const`, não pode ser reatribuída → troque para `let`.
2. `Pontos` com P maiúsculo não existe — JS diferencia maiúscula de minúscula.
```js
let pontos = 10;
pontos = pontos + 5;
console.log("Total de pontos: " + pontos); // 15
```

**Exercício 4**
```js
typeof "123"  // "string" (está entre aspas!)
typeof 123    // "number"
typeof true   // "boolean"
typeof cidade // "string" (declarada no ex. 1)
```

## Módulo 2 — Operadores e Condicionais

**Exercício 1**
```js
const numero = 7;
if (numero % 2 === 0) {
  console.log("par");
} else {
  console.log("impar");
}
```

**Exercício 2**
```js
const nota = 6;
if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
```

**Exercício 3**
```js
const idade = 16;
const acompanhada = true;

if (idade >= 18 || (idade >= 16 && acompanhada)) {
  console.log("Pode entrar");
} else {
  console.log("Não pode");
}
```

**Exercício 4**
```js
5 === "5"      // false (tipos diferentes: number vs string)
10 !== 9       // true
4 > 4          // false (4 não é MAIOR que 4)
true && false  // false (&& exige os dois true)
false || true  // true  (|| basta um true)
!(3 < 5)       // false (3 < 5 é true, ! inverte)
```

## Módulo 3 — Loops

**Exercício 1**
```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

**Exercício 2**
```js
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
console.log("🚀 Decolar!");
```

**Exercício 3**
```js
const n = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}
```

**Exercício 4**
```js
let soma = 0;
for (let i = 1; i <= 100; i++) {
  soma = soma + i; // ou: soma += i
}
console.log(soma); // 5050
```

**Exercício 5 — FizzBuzz**
```js
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz"); // testa o caso duplo PRIMEIRO
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

## Módulo 4 — Arrays

**Exercício 1**
```js
const filmes = ["Matrix", "Interestelar", "Shrek"];
console.log(filmes[0]);                  // primeiro
console.log(filmes[filmes.length - 1]);  // último
console.log(filmes.length);              // 3
```

**Exercício 2**
```js
filmes.push("Toy Story");
filmes.pop();
console.log(filmes); // voltou a ter 3
```

**Exercício 3**
```js
const alunos = ["Ana", "Bruno", "Carla", "Diego"];
for (let i = 0; i < alunos.length; i++) {
  console.log(`Aluno(a): ${alunos[i]}`);
}
```

**Exercício 4**
```js
const numeros = [12, 5, 87, 33, 41];
let maior = numeros[0];
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
}
console.log(maior); // 87
```

**Exercício 5**
```js
let somaPares = 0;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    somaPares += numeros[i];
  }
}
console.log(somaPares); // 12 (só o 12 é par nessa lista)
```

## Módulo 5 — Objetos

**Exercício 1**
```js
const celular = {
  marca: "Samsung",
  modelo: "S24",
  preco: 3500,
};
console.log(`O ${celular.marca} ${celular.modelo} custa R$ ${celular.preco}`);
```

**Exercício 2**
```js
celular.preco = celular.preco * 0.9; // -10%
celular.emPromocao = true;
console.log(celular);
```

**Exercício 3**
```js
for (let i = 0; i < jogos.length; i++) {
  console.log(`${jogos[i].titulo} - nota ${jogos[i].nota}`);
}
```

**Exercício 4**
```js
// a) média
let somaNotas = 0;
for (let i = 0; i < jogos.length; i++) {
  somaNotas += jogos[i].nota;
}
console.log(somaNotas / jogos.length); // 8.66...

// b) maior nota
let melhor = jogos[0];
for (let i = 1; i < jogos.length; i++) {
  if (jogos[i].nota > melhor.nota) {
    melhor = jogos[i];
  }
}
console.log(melhor.titulo); // Zelda
```

## Módulo 6 — Funções

**Exercício 1**
```js
function quadrado(n) {
  return n * n;
}
console.log(quadrado(5)); // 25
```

**Exercício 2**
```js
function ehMaiorDeIdade(idade) {
  return idade >= 18; // a comparação já devolve true/false
}
console.log(ehMaiorDeIdade(15)); // false
console.log(ehMaiorDeIdade(20)); // true
```

**Exercício 3**
```js
function parOuImpar(n) {
  if (n % 2 === 0) {
    return "par";
  }
  return "impar";
}
console.log(parOuImpar(4));  // par
console.log(parOuImpar(7));  // impar
console.log(parOuImpar(10)); // par
```

**Exercício 4**
```js
const triplo = (n) => n * 3;
```

**Exercício 5**
```js
function mediaDaTurma(alunos) {
  let soma = 0;
  for (let i = 0; i < alunos.length; i++) {
    soma += alunos[i].nota;
  }
  return soma / alunos.length;
}

function aprovados(alunos) {
  const nomes = [];
  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nota >= 7) {
      nomes.push(alunos[i].nome);
    }
  }
  return nomes;
}

console.log(mediaDaTurma(turma)); // 6.875
console.log(aprovados(turma));    // ["Ana", "Carla"]
```

## Módulo 7 — DOM

**Exercício 1**
```js
const mensagem = document.querySelector(".mensagem");
const btnDestacar = document.querySelector("#btn-destacar");

btnDestacar.addEventListener("click", () => {
  mensagem.classList.toggle("destaque");
});
```

**Exercício 2**
```js
const btnTema = document.querySelector("#btn-tema");

btnTema.addEventListener("click", () => {
  document.body.classList.toggle("escuro");
});
```

**Exercício 3**
```js
const spanContador = document.querySelector("#contador");
const btnMais = document.querySelector("#btn-mais");
const btnMenos = document.querySelector("#btn-menos");
let contador = 0;

btnMais.addEventListener("click", () => {
  contador++;
  spanContador.textContent = contador;
});

btnMenos.addEventListener("click", () => {
  contador--;
  spanContador.textContent = contador;
});
```

**Exercício 4**
```js
const campoNome = document.querySelector("#campo-nome");
const btnSaudar = document.querySelector("#btn-saudar");
const saudacaoEl = document.querySelector("#saudacao");

btnSaudar.addEventListener("click", () => {
  const nome = campoNome.value;
  if (nome === "") {
    saudacaoEl.textContent = "Digite um nome!";
  } else {
    saudacaoEl.textContent = `Olá, ${nome}! 👋`;
  }
});
```
