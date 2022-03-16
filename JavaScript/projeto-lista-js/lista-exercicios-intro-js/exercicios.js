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

  let altura = Number(prompt("Qual é a altura do retângulo?"))
  let largura = Number(prompt("Qual é a a largura do retângulo?"))
  
  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  
  let anoAtual = Number(prompt("Qual o ano atual?"))
  let anoDeNascimento = Number(prompt("Qual o seu ano de nascimento?"))
  let idade = anoAtual - anoDeNascimento
  
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  
  let imc = peso / (altura * altura)

  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  
  let nome = prompt("Qual é o seu nome?")
  let idade = prompt("Qual é a sua idade?")
  let email = prompt("Digite o seu email aqui!")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  
  let cor1 = prompt("Qual é a sua cor favorita?")
  let cor2 = prompt("Qual é a sua outra cor favorita?")
  let cor3 = prompt("Qual é a sua última cor favorita?")

  let corFavorita = [cor1, cor2, cor3]
  
  console.log(corFavorita)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  
  let maiuscula = string.toUpperCase()

  return maiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  
  let semPrejuizo = custo / valorIngresso

  return semPrejuizo
}


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
  let tamanho = string1.length === string2.length
  
  return tamanho
}
// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  
  let primeiroElemento = array[0]
  
  return primeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  
  let ultimoElemento = array[array.length - 1]

  return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {

  let primeiro = array[0]
  let ultimo = array[array.length - 1]

  let troca = array[0] = ultimo; array[array.length - 1] = primeiro

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {

  let saoIguais = string1.toLowerCase() === string2.toLowerCase()
  
  return saoIguais
}

// EXERCÍCIO 13
function checaRenovacaoRG() {

  let anoAtual = Number(prompt("Qual o ano atual?"))
  let anoDeNascimento = Number(prompt("Qual o seu ano de nascimento?"))
  let anoDaIdentidade = Number(prompt("Qual o ano em que sua carteira de identidade foi emitida?"))

  let idade = anoAtual - anoDeNascimento
  let idadeDaIdentidade = anoAtual - anoDaIdentidade

  let criterio1 = idade <= 20 && idadeDaIdentidade >= 5
  let criterio2 = idade > 20 && idade <= 50 && idadeDaIdentidade >= 10
  let criterio3 = idade > 50 && idadeDaIdentidade >= 15

  let tudoCerto = criterio1 || criterio2 || criterio3

   console.log(tudoCerto)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {

  let cond1 = ano % 400 === 0
  let cond2 = (ano % 4 === 0) && (ano % 100 !== 0)

  let bisexto = cond1 || cond2

  return bisexto

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {

  let maiorDeIdade = prompt("Você tem mais de 18 anos?")
  let ensinoMedio = prompt("Você possui ensino médio completo?")
  let horarioDisponivel = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  let inscricaoValida = maiorDeIdade === "sim" && ensinoMedio === "sim" && horarioDisponivel === "sim"

  console.log(inscricaoValida)
}