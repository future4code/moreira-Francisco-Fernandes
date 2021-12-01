// Exercício de interpretação de código.
/* Questão 1- Leia o código abaixo. Indique todas as mensagens impressas no console, 
SEM EXECUTAR o programa.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)*/

// Resposta 1- a. false, b. false, c. true, d. booleon

/* Questão 2- Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: 
consegue perceber algum problema? O que será impresso no console?
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)*/

// Resposta 2- Ele está tentando somar duas strings.
// Será impresso no console a junção dos números, não a soma deles.

/* Questão 3- Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, 
de fato, a soma dos dois números.*/

// Resposta 3- Ele pode transformar a strings em número, usando "Number".
// Ex: let primeiroNumero = Number (prompt("Digite um numero!"))
// let segundoNumero = Number (prompt("Digite outro numero!"))  


// Exercício de de escrita de código

/* Questão 1- Faça um programa que:
a) Pergunte a idade do usuário

b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

c) **Imprima na console** a seguinte mensagem: 
"Sua idade é maior do que a do seu melhor amigo?", 
seguido pela resposta (`true` ou `false`)

d) **Imprima na console** a diferença de idade 
(não tem problema se sair um número negativo)*/

const idadeDoUsuario = Number (prompt("Qual é a sua idade?"))
const idadeSeuAmigo = Number (prompt("Qual é a idade do seu melhor amigo ou amiga?"))
console.log("Sua idade é maior do que a do seu amigo?", idadeDoUsuario > idadeSeuAmigo)
console.log("A diferença de idade de vocês é:", idadeDoUsuario - idadeSeuAmigo)


/* Questão 2- Faça um programa que: 
a) Peça ao usuário que insira um número **par**

b) Imprima na console **o resto da divisão** desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
*/

const numeroPar = Number (prompt("Insira um número par"))
console.log("Resto da divisão:", numeroPar % 2)
// Resposta letra C: O resto da divisão sempre vai ser 0.
// Resposta letra D: O resto da divisão sempre vai ser 1.


/* Questão 3- Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console.
a) A idade do usuário em meses

b) A idade do usuário em dias

c) A idade do usuário em horas*/

const idadeEmAnos = Number (prompt("Qual é a sua idade?"))
console.log("Sua idade em meses é:", 12 * idadeEmAnos)
console.log("Sua idade em dias é:", 365 * idadeEmAnos)
console.log("Sua idade em horas é:", 24 * 365 * idadeEmAnos)


/* Questão 4- Faça um programa que pergunte ao usuário dois números. 
Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:
O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

obs: O true ou false vai depender dos números inseridos e do resultado das operações.
*/

let numero1 = Number (prompt("Por favor, insira uma número."))
let numero2 = Number (prompt("Por favor, insira outro número."))

console.log("O primeiro numero é maior que segundo?", numero1 > numero2)
console.log("O primeiro numero é igual ao segundo?", numero1 === numero2)
console.log("O primeiro numero é divisível pelo segundo?", numero1 % numero2 === 0)
console.log("O segundo numero é divisível pelo primeiro?", numero2 % numero1 === 0)


