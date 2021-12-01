// Exercícios de interpretação de código
/* Questão 1- Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)*/

//Resposta 1:
// a. undefined
// a variável foi declarada, mas nenhum valor foi atribuído. Portanto, o valor da variável é 'indefinido'

// b. null
// 'null' é atribuído a uma variável para especificar que a variável não contém nenhum valor ou está vazia.

// c. 11
// lenght nos diz o tamanho de uma string.

// d. 3

// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// f. 9

/* Questão 2- Leia o código abaixo com atenção.

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?*/

// Resposta 2:
// SUBI NUM ÔNIBUS EM MIRROCOS 27




// Exercícios de escrita de código
/* Questão 1- Faça um programa que pergunte ao usuário seu nome e seu e-mail. 
Em seguida, Imprima no console a seguinte mensagem:
O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!*/

/*const nomeDoUsuario = prompt("Por favor, diga seu nome.")
const emailDoUsuario = prompt("Qual é o seu E-mail?")
const messagemDeBoasVindas = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`
console.log(messagemDeBoasVindas)*/

/* Questão 2- Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. 
Em seguida, siga os passos:

a) Imprima no console o array completo

b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", 
seguida por cada uma das comidas, **uma embaixo da outra**.

c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista*/

// a
let array
let minhasComidasPreferidas = ["Lasanha", "Macarrão", "Batata Frita", "Maria-Isabel", "Coxinha"]
console.log(minhasComidasPreferidas)

// b
console.log("Essas são as minhas comidas preferida.")

const primeiraComida = minhasComidasPreferidas [0]
console.log(primeiraComida)

const segundaComida = minhasComidasPreferidas [1]
console.log(segundaComida)

const terceiraComida = minhasComidasPreferidas [2]
console.log(terceiraComida)

const quartaComida = minhasComidasPreferidas [3]
console.log(quartaComida)

const quintaComida = minhasComidasPreferidas [4]
console.log(quintaComida)

// c
let comidaDoUsuario = prompt("Qual é a sua comida preferida?")
console.log(comidaDoUsuario)

