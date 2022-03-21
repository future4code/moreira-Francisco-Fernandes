// Postinho de Vacinação - Revisão JS 

/*
Exercício 1- Operadores de comparação.
A- Escreva uma função e imprima no console os resultados do comparador de 
desigualdade a!==b. 
*/

function checarDesigualdade(a, b) {

     return`No comparador de desigualdade ${a}!==${b} é ${a !== b}`
    
}
    
console.log(checarDesigualdade(1, 2));

/*
B- Compare a igualdade entre  "a" e "b" e imprima o resultado no console
 usando a template string como no exemplo acima.
*/
function checarIgualdade(a, b) {
    return`No comparador de igualdade ${a}===${b} é ${a === b}`
    
}
console.log(checarIgualdade(5, 5));

/* 
C- Faça uma função chamada "verificaSeEMaior" e verifique se o parâmetro "a" é maior 
que o parâmetro "b" use ao final da função um console.log chamando a função dentro e 
passando os valores de "a" e "b"
*/
function verificaSeEMaior(a, b) {
    return `Pra ver se ${a} > ${b} é ${a > b}`
}
console.log(verificaSeEMaior(10, 5))



/*Exercício 2 - Operadores de comparação.
Agora sem usar o código, apenas com seus conhecimentos, escreva `true` ou `false` para as comparações abaixo:
    exemplo `1 > 2 é false`
*/
    
1 === '1' // false
    
1 == '1' // true
    
'a' === 'b' // false
    
'b' > 'a' // true
    
0 !== null // true
    
/*Exercício 3 - Condicional 
                        Cadastro de usuário

Escreva uma função que receba do usuário **nomeDoUsuario**, 
**anoDeNascimento**, **senhaDoUsuario** e **nacionalidade** e 
****guarde essas informações dentro de um array `usuários.` 
Porém só poderão se cadastrar:
    
- Usuários maiores de 18 anos
- A senha deve ter no mínimo 6 caracteres
- E que a nacionalidade seja brasileira.
*/

const cadastro = () => {

    let nome = prompt("Qual é o seu nome?")
    let anoDeNascimento = Number(prompt("Em que ano você nasceu?"))
    let senha = prompt("senha")
    let nacionalidade = prompt("Qual é a sua nacionalidade?")
  
    let usuarios = [];
  
    let usuario = {
        nome: nome,
        anoDeNascimento: anoDeNascimento,
        senha: senha,
        nacionalidade: nacionalidade
    }
  
    let idadeDoUsuario = 2021 - usuario.anoDeNascimento
  
    if (idadeDoUsuario <= 18) {
      return "Ops! Usuário precisa ser maior que 18 anos."
    }

    if (usuario.senha.length < 6) {
      return "Ops! Senha precisa ter no mínimo 6 caracteres."
    }
    if (usuario.nacionalidade !== 'br') {
      return "Ops! Usuário precisa ter nacionalidade 'br'."
    }
  
    usuarios.push(usuario)
  
    return usuarios
   
  };


/*
Exercício 4- Condicional 
                   **Login do usuário**

Escreva uma função que peça uma senha para o usuário e 
verifique se está é a mesma senha cadastrada por ele.  
Dentro da função defina uma senha válida  Ex: const senha=”labenu”
    
- Caso a senha seja válida imprima no console a mensagem (Usuário Logado)
- Caso a senha seja inválida imprima no console (Senha Inválida)*/

let login = () => {

    let senhaDoUsuario = prompt("Digite sua senha!")
    let senhaSalva = "labenu"
    
    if (senhaDoUsuario === senhaSalva) {
        console.log("Usuário logado!")
    } else {
        console.log("Senha inválida!")
    }

    return senhaDoUsuario
}


/*
- Exercício 5 - Condicional 
                          **Primeira dose**
    
Escreva uma função que receba do usuário seu nome, e o nome da vacina que tomou. 
E retorne a mensagens a seguir dependendo da vacina tomada.   
    
```jsx
`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. 
Compareça no posto na data ${data}.`
```
    
Sabendo que as vacinas tem tempos diferentes  para a aplicação da segunda dose 
crie uma única variável ‘tempo” que mude seu valor dependendo da vacina informada 
pelo usuário, faça o mesmo com “data”.
    
    - Coronavac = 28 dias
    - Astrazenica = 90 dias
    - Pfizer = 90 dias
*/

let primeiraDose = () => {

    let nome = prompt("Qual é o seu nome?")
    let anoDeNascimento = prompt("Em que ano você nasceu?")
    let senha = prompt("Digite sua senha!")
    let nacionalidade = prompt("Qual a sua nacionalidade")
    let vacina = prompt("Qual vacina você tomou?")
  
    let tempo = 0
    let data = new Date()
  
    switch (vacina) {
      case "coronavac":
        tempo = 28
        break
      case "astrazenica":
        tempo = 90
        break
      case "pfizer":
        tempo = 90
        break
      default:
        return "Erro! Vacina inválida."
    }
  
    let usuarios = [];
  
    let usuario = {
      nome: nome,
      anoDeNascimento: anoDeNascimento,
      senha: senha,
      nacionalidade: nacionalidade,
      vacina: vacina,
      imunizacao: "incompleta"
    }
  
    usuarios.push(usuario)
  
    console.log(usuarios)
  
    data.setDate(data.getDate() + tempo)
  
    let dataFormatada = data.toLocaleDateString()
  
    return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias.
    Compareça no posto na data ${dataFormatada}.`
  };



  /*
  - Exercício 6 - Loop+Condicional 
                                 **Segunda dose**
    
Escreva uma função para validar a segunda dose de um usuário, que receba o 
nomeDoUsuário e mude o valor da propriedade `imunização` para **“completa”** 
para isso vamos te fornecer uma lista de usuários.
    
```jsx
const usuarios = [
{ nome: "Artur", imunizacao: "incompleta" },
{ nome: "Barbara", imunizacao: "incompleta" },
{ nome: "Carlos", imunizacao: "incompleta" }
]
```
    
Dica:  para acessar os valores guardados em cada propriedade de um objeto use 
a notação do ponto chamando pelo nome da propriedade.
**Ex:**  
    
- objeto.nome // "Bárbara"
- objeto.vacina // "astrazenica"
  */

let segundaDose = (pessoaVacinada) => {

    let usuarios = [
      { nome: "Artur", imunizacao: "incompleta" },
      { nome: "Barbara", imunizacao: "incompleta" },
      { nome: "Carlos", imunizacao: "incompleta" }
    ];
  
    for (let usuario of usuarios) {
      if (usuario.nome === pessoaVacinada) {
        usuario.imunizacao = "completa"
      }
    }
  
    return usuarios
  };


/*
- Exercício 7 -  Loop+Condicional 
                              **Aviso aos atrasados**
    
As pessoas que tomaram a primeira dose da vacina, não voltaram no postinho para 
a segunda dose e temos que enviar uma mensagem para elas no app.
Escreva uma função que **leia a lista de usuários** e **verifique** 
se a imunização está completa ou não e caso não esteja completa,  
**imprima no console** uma mensagem avisando que ele deve voltar ao 
posto para tomar a segunda dose.
    
```jsx
`Olá ${n.nome}! Sua imunização está ${n.imunizacao}, 
por favor volte ao postinho para tomar a segunda dose.`
```
    
Pare este exercício vamos te fornecer uma  lista de usuários.
const usuarios = [
       { nome: "Artur", imunizacao: "incompleta" },
       { nome: "Barbara", imunizacao: "completa" },
       { nome: "Carlos", imunizacao: "incompleta" }
]
*/

