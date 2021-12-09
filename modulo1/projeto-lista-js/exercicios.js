// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Digite a altura"))
  const largura = Number(prompt("Digite a largura"))
  const area = altura * largura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Digite o ano atual."))
  const anoNascimento = Number(prompt("Digite o ano que você nasceu."))
  idade = anoAtual - anoNascimento
  console.log(idade,"anos")
}

// EXERCÍCIO 03
function calculaIMC(peso1 = Number(prompt("Digite seu peso.")), altura1 = Number(prompt("Digite sua altura."))) {
  
  let imc = peso1 / (altura1 * altura1)
return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Qual é o seu nome?")
  let idade = Number(prompt("Qual é a sua idade?"))
  let email = prompt("Qual é o seu E-mail?")
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let listaDeCores = []
  let cor1 = prompt("Diga sua cor favorita.")
  let cor2 = prompt("Diga outra cor favorita.")
  let cor3 = prompt("Diga mais uma cor favorita.")

listaDeCores.push(cor1, cor2, cor3)
console.log(listaDeCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string = prompt("Digite um texo")) {

return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo = 5000, valorIngresso = 50) {
  let  naoprejuizo = custo / valorIngresso

  return naoprejuizo
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1 = prompt("Digite um texo"), string2 = prompt("Digite um texo")) {
  
return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array = ["A", "E", "I", "O", "U"]) {

return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array = ["a", "e", "i", "o", "u"]) {
  
  return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array = [1, 2, 3, 4, 5]) {
 array.push(array.splice(0,1)[0])
 array.push(array.splice(0,array.length-1)[0])
 return array
}
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}