// Exercício 2

let operador = process.argv[2]

let num1 = Number(process.argv[3])
let num2 = Number(process.argv[4])

let resultado = "Resultado"

switch (operador) {
  case "soma":
    resultado = num1 + num2
    break
  case "sub":
    resultado = num1 - num2
    break
  case "mult":
    resultado = mum1 * mum2
    break
  case "div":
    resultado = num1 / num2
    break
    case "resto":
    resultado = num1 % num2
    break
  default:
    resultado = "Erro!"
}

console.log(resultado)

