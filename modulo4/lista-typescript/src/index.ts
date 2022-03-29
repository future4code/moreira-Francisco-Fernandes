console.log("Olá, mundo!")

// Exercício 1
function dataEnome(
    nome: string, 
    data: string,
    ){  
    data = "27/05/1996"
    data.split("/")
    let dia: String = data[0]
    let mes: String = data [1]
    let ano: String = data [2]
    console.log(`"Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}" `)
}

// Exercício 2
function tipo(num: number) {
    num = 2
    return typeof tipo
}
console.log(tipo)

// Exercício 3
