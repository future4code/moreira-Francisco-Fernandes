// Exercícios de interpretação de código.

// Questão 1

// Respota 1-
// A) Os valores 10 e 50.

// B) Não vai aparecer nada, já que não estou relacionando nada a minha função.


// Questão 2

// A) Essa função deixa o texto que o usuário inserir todo em letras minúsculas.
// Sua utilidade é saber se o usuário vai inserir alhuma palava "cenoura" no texto, retornando true ou false.

// B) I- true
//    II- true
//    III- true


// Exercícios de escrita de código.

// Questão 1

// Resposta 1-
// A
const minhasInformações = (nome, idade, cidadeAtual, profissão) => {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidadeAtual} e sou ${profissão}.`)
}
minhasInformações("Cleiton", 25, "Altos-PI", "Estudante")

// B
function dadosColetados(nomeUsuario, idadeUsuario, enderecoUsuario, profissaoUsuario) {
    console.log(`Eu sou ${nomeUsuario}, tenho ${idadeUsuario} anos, moro em ${enderecoUsuario} e sou ${profissaoUsuario}.`)
}
    
 dadosColetados(nomeUsuario = prompt("Por favor, diga seu nome."),  
    idadeUsuario = prompt("Por favor, informe a sua idade."),
    enderecoUsuario = prompt("Por favor, informe seu endereço."),
    profissaoUsuario = prompt("Por favor, informe sua profissão."))

// Questão 2

// A
const somaDeDoisNumeros = (numero1, numero2) => {
   const  soma = numero1 + numero2

   return soma
}
  const resultado = somaDeDoisNumeros(Number(prompt("Escreva um número")), Number(prompt("Escreva outro número")))
  
  console.log("A soma do número 1 + o número 2 é:", resultado)

  // B
  const numeroMaior = (numero1, numero2) => {
    const  maior = numero1 >= numero2
 
    return maior
 }
   const maiorOuIgual = numeroMaior(Number(prompt("Escreva um número")), Number(prompt("Escreva outro número")))
   
   console.log("O primeiro número é maior ou igual o segundo?", maiorOuIgual)

// C
const numeroPar = (numeroInserido) => {
    const  par = (numeroInserido % 2) ===0
 
    return par
 }
   const ePar = numeroPar(Number(prompt("Escreva um número")))
   
   console.log("O número inserido é par?", ePar)

   // D
   



