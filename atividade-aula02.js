
console.log("\n== 1) Tipos primitivos + typeof ==\n");

//declaração de variáveis com diferentes tipos primitivos
var nome = "Luiza";
var idade = 25;
var estudante = true;
var endereco;
var telefone = null;
var salario = 5000n;
var id = Symbol("id");

console.log("typeof nome:", typeof nome); //string
console.log("typeof idade:", typeof idade); //number
console.log("typeof estudante:", typeof estudante); //boolean
console.log("typeof endereco:", typeof endereco); //undefined
console.log("typeof telefone:", typeof telefone); //object
console.log("typeof salario:", typeof salario); //bigint
console.log("typeof id:", typeof id); //symbol

// O typeof null retorna "object", o que é um bug conhecido no JavaScript.


console.log("\n== 2) BigInt e Symbol ==\n");

const numeroGrande = 9007199254740991n; // BigInt
console.log("BigInt:", numeroGrande, " \nTypeof:", typeof numeroGrande);

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);
// false -> cada Symbol é único, mesmo com a mesma descrição

console.log(typeof id1);
// "symbol"


console.log("\n== 3) Operadores ==\n");


// Matemáticos
console.log(10 + 5);
// 15

console.log(20 / 4);
// 5


// Lógicos
console.log(true && false);
// false -> AND precisa que os dois sejam verdadeiros

console.log(true || false);
// true -> OR precisa que pelo menos um seja verdadeiro


// Comparação
console.log(5 > 3);
// true

console.log(5 == "5");
// true -> compara apenas o valor (conversão automática)

console.log(5 === "5");
// false -> compara valor E tipo


console.log("\n== 4) Concatenação e Conversão ==\n");


console.log(2 + "2");
// "22"
// número virou string e ocorreu concatenação

console.log(2 + (+"2"));
// 4
// +"2" converte a string para número

console.log("Idade: " + 30);
// "Idade: 30"
// aqui o + vira concatenação


console.log("\n== 5) Escopo Léxico e Blocos ==\n");


// bloco isolado
{
  console.log("Isso é um bloco isolado");
}


// de dentro para fora (não pode acessar)
{
  let dentro = "sou interno";
}

// console.log(dentro);
// ERRO: variável não existe fora do bloco


// de fora para dentro
let fora = "estou fora";

{
  console.log(fora);
  // variável externa pode ser usada dentro
}


// var vazando do if
if (true) {
  var vazou = "sou var";
}

console.log(vazou);
// "sou var"
// var não respeita escopo de bloco


console.log("\n== 6) Shadowing com const ==\n");


const bloco = "valor";

console.log("Fora antes:", bloco);

if (true) {

  console.log("Dentro usando o de fora:", bloco);

  {
    const bloco = "outro valor";
    console.log("Dentro do bloco interno:", bloco);
  }

  console.log("Depois do bloco interno:", bloco);
}

console.log("Fora depois:", bloco);
// o const de fora não foi alterado


console.log("\n== 7) Imutabilidade ==\n");


let texto = "javascript";

texto.toUpperCase();

console.log(texto);
// "javascript"
// strings são imutáveis, não mudou

texto = texto.toUpperCase();

console.log(texto);
// "JAVASCRIPT"


console.log("\n== 8) Assincronismo com setTimeout ==\n");


console.log("setTimeout entra na fila e roda depois que o código atual termina");


// exemplo clássico
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

// ordem real:
// A
// C
// B


// dois timeouts
setTimeout(() => {
  console.log("Timeout 0ms");
}, 0);

setTimeout(() => {
  console.log("Timeout 100ms");
}, 100);

console.log("Fim do código");

// ordem real:
// Fim do código
// Timeout 0ms
// Timeout 100ms

