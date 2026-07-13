# 📖 Teoria: Loops e Funções (sem mistério)

> Material de apoio para os módulos 3 e 6.
> "Laço de repetição" e "loop" são a MESMA coisa — laço é só a tradução.

---

# PARTE 1 — LOOPS 🔁

## Para que serve

Para **não copiar e colar código**. Todo loop, se "desenrolado", vira código repetido:

```js
// sem loop 😫              // com loop 😎
console.log(1);             for (let i = 1; i <= 3; i++) {
console.log(2);               console.log(i);
console.log(3);             }
```

## Anatomia do for — as 3 perguntas

```js
for (let i = 0;  i < 5;  i++) {
     └ 1         └ 2     └ 3
```

1. **ONDE começa?** `let i = 0` → cria o contador (roda 1 vez só, no início)
2. **ATÉ quando?** `i < 5` → testado ANTES de cada volta; se der false, o loop acaba
3. **COMO avança?** `i++` → roda DEPOIS de cada volta (`i++` = `i = i + 1`)

## Ponte com o Python

O for do JS é o `range()` de peito aberto:

| Python | JavaScript |
|---|---|
| `for i in range(5):` | `for (let i = 0; i < 5; i++)` |
| `for i in range(1, 11):` | `for (let i = 1; i <= 10; i++)` |
| `for i in range(10, 0, -1):` | `for (let i = 10; i >= 1; i--)` |
| `for fruta in frutas:` | `for (let i = 0; i < frutas.length; i++)` e usa `frutas[i]` |
| `while vidas > 0:` | `while (vidas > 0) {` |

## A técnica que resolve TUDO: tabela de rastreio

Quando um loop confundir, rode ele NA MÃO, volta por volta.
Exemplo: `for (let i = 1; i <= 3; i++) { console.log(i * 10); }`

| volta | i | `i <= 3`? | o que acontece |
|-------|---|-----------|----------------|
| 1ª    | 1 | true ✅   | imprime 10     |
| 2ª    | 2 | true ✅   | imprime 20     |
| 3ª    | 3 | true ✅   | imprime 30     |
| 4ª    | 4 | false ❌  | **loop PARA**  |

Faça isso no papel algumas vezes e o loop deixa de ser mágica.

## O padrão "acumulador" (aparece em TODO exercício)

Somar, contar, juntar... o truque é sempre o mesmo:
**crie a variável ANTES do loop, atualize DENTRO, use DEPOIS.**

```js
let soma = 0;                        // 1. ANTES: começa zerada
for (let i = 1; i <= 5; i++) {
  soma = soma + i;                   // 2. DENTRO: acumula (ou soma += i)
}
console.log(soma);                   // 3. DEPOIS: 15
```

Rastreio: soma vai valendo 0 → 1 → 3 → 6 → 10 → 15.

## while — o if que insiste

```js
let vidas = 3;
while (vidas > 0) {      // testa: ainda tem vida?
  console.log(`Vidas: ${vidas}`);
  vidas--;               // se esquecer esta linha = LOOP INFINITO!
}
console.log("Game over");
```

- **for** → você SABE quantas voltas ("faça 10 vezes")
- **while** → você sabe só a CONDIÇÃO de parada ("enquanto tiver vida")

⚠️ Dentro do while, algo PRECISA mudar a condição, senão ele nunca para.

---

# PARTE 2 — FUNÇÕES ⚙️

## A metáfora: máquina de suco

**entra fruta → processa → sai suco**

```js
function fazerSuco(fruta) {        //  def fazer_suco(fruta):
  return `suco de ${fruta}`;       //      return f"suco de {fruta}"
}

fazerSuco("laranja");  // -> "suco de laranja"
fazerSuco("uva");      // -> "suco de uva"  (mesma máquina, outra entrada!)
```

## As 3 confusões que travam todo mundo

### 1. Definir ≠ Executar
Escrever a `function` não roda nada — é só CADASTRAR a receita.
Ela roda quando você CHAMA: `fazerSuco("uva")`.

```js
function gritar() {
  console.log("AAAA!");
}
// ...nada aconteceu ainda...
gritar(); // AGORA sim: "AAAA!"
gritar(); // de novo! "AAAA!"
```

### 2. return ≠ console.log (A confusão clássica)

| | `console.log` | `return` |
|---|---|---|
| serve para | MOSTRAR na tela | DEVOLVER o valor para o código |
| quem usa o valor | o humano (só lê) | o programa (guarda, soma, repassa) |
| Python equivalente | `print()` | `return` |

```js
function somar(a, b) {
  return a + b;              // devolve o resultado
}

const total = somar(2, 3);   // o 5 foi GUARDADO em total
console.log(total * 10);     // 50 — deu pra continuar usando!
```

Se `somar` usasse `console.log` em vez de `return`, o 5 apareceria na
tela e MORRERIA ali — `total` ficaria `undefined`.

**Regra de bolso: função boa RETORNA; quem mostra na tela é quem chamou.**

### 3. Parâmetro = variável que espera valor

```js
function dobro(n) {   // n não vale NADA ainda — é um espaço reservado
  return n * 2;
}

dobro(7);   // na chamada, o JS faz n = 7 automaticamente → 14
dobro(50);  // agora n = 50 → 100
```

- **Parâmetro** = o nome na definição (`n`)
- **Argumento** = o valor real na chamada (`7`)

## Arrow function — só outra roupa, mesma máquina

```js
// jeito clássico
function dobro(n) {
  return n * 2;
}

// arrow equivalente
const dobro = (n) => {
  return n * 2;
};

// arrow curta (1 linha): sem chaves, o return é automático
const dobro = (n) => n * 2;
```

É a mesma coisa que o `lambda` do Python (`dobro = lambda n: n * 2`),
mas no JS a arrow é usada o tempo todo — especialmente em React.

## Rastreando uma função na mão

```js
function media(a, b) {
  return (a + b) / 2;
}
const resultado = media(8, 6);
```

1. JS vê a chamada `media(8, 6)`
2. Entra na função com `a = 8`, `b = 6`
3. Calcula `(8 + 6) / 2` → `7`
4. `return 7` → o 7 "sai da máquina"
5. `resultado` recebe 7

---

# Checklist antes de voltar aos exercícios ✅

Consegue responder sem olhar?

1. O que cada uma das 3 partes do `for (let i = 0; i < 5; i++)` faz?
2. Quando usar `while` em vez de `for`?
3. Qual a diferença entre `return` e `console.log`?
4. O que acontece se você define uma função mas nunca chama?
5. No `function somar(a, b)` chamado como `somar(2, 3)`, quem é
   parâmetro e quem é argumento?

Respondeu as 5? Você está pronto para o módulo 3. 🚀
