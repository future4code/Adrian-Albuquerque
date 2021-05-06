// Exercicio 1

function minhaFuncao(variavel) {
    return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))


// a) O que vai ser impresso no console ?

// R) A função iria multiplicar por 5 o valor inserido pelo parametro 'variavel'

// b) O que aconteceria se retirasse os dois console-log e simplesmente invocasse a função minhaFunção(2) e minhaFuncao(10) ? o que apareceria no console ?

// R) Nada é exibido no terminal pela falta do console.log

// Exercicio 2

let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Chijo"];


const outraFuncao = function (array) {
    for (let i = 0; i < 2; i++) {
        console.log(array[i])
    }
}

outraFuncao(arrayDeNomes)

// a) Explique quais são as saidas impressas no console

// R) O indice do array dado pelo contador i é de um valor menor que 2, exibindo ao console o indice 0 e 1, assim, passando o Darvas e Caio como return 

// b) Se arrayDeNomes mudasse de valor para ["Amanda", "Caio"], o que seria impresso no console ?

// R) Será exibido apenas os indice 0 e 1 por limitação do contador, assim mostrando Amanda e Caio como retorno no terminal

/* Exercicio 3
O código abaixo mostra uma função que recebe um array e devolve outro array, Explique em poucas palavras o que ele faz e sugira um nome melhor para ela ! */

const metodo = (array) => {
    let arrayFinal = [];

    for (let x of array) {
        if (x % 2 === 0) {
            arrayFinal.push(x * x)
        }
    }

    return arrayFinal;
}

// a) A função identifica se o valor de X é par e o resultado é inserido no arrayFinal multiplicando ele por ele mesmo, logo depois é retornado

// Exercicio 4

/* a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informaçoes sobre você, como: 
"Eu sou Caio, Tenho 23 anos, moro em São Paulo"
Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprimir essa mensagem
*/

function imprimirMensagem() {

    console.log("Eu sou o Adrian, Tenho 19 anos, moro em Recife-PE, Sou estudante de Analise e desenvolvimento de sistemas e da Labenu !")
}

imprimirMensagem()

/* b) Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome, idade, cidade e um boolean que representa se é estudante ou não. Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e [SOU/NÃO SOU] estudante.
*/

function mensagem2(nomePessoa, idadePessoa, cidadePessoa, estudantePessoa) {
    nomePessoa = prompt("Qual o seu Nome ?")
    idadePessoa = Number(prompt("Quantos anos você tem ?"))
    cidadePessoa = prompt("De onde você é ?")
    estudantePessoa = prompt("Você é estudante ? responda Sim || Não").toLowerCase()
    console.log(estudantePessoa)
    if (estudantePessoa === 'sim') {
        estudantePessoa = 'Estudante'
    } else if (estudantePessoa === 'não' || estudantePessoa === 'nao') {
        estudantePessoa = 'Não estudante'
    } else {
        estudantePessoa = 'Valor Incorreto'
    }
    console.log(`Olá ${nomePessoa} você tem ${idadePessoa}, mora em ${cidadePessoa} e seu estado atual é: ${estudantePessoa} !`)
}

// mensagem2()

// Exercicio 5

// a) Escreva una função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. chame a função e imprima no console o resultado.

function funcRetorno(num1, num2) {
    return num1 + num2
}
console.log(funcRetorno(5, 4))

// b) Faça uma função que receba 2 números e retorne um boolean informando se o primeiro é maior ou igual ao segundo

function maiorQue(num1, num2) {
    num1 = Number(prompt("Digite um Numero"))
    num2 = Number(prompt("Digite outro número"))
    if (num1 >= num2) {
        return true
    } else {
        return false
    }
}

// console.log(maiorQue())


// c) Faça uma função que recebe uma mensagem string como parâmetro e imprima essa mensagem 10 vezes.

function escrevaOi() {
    for (let i = 0; i < 10; i++) {
        console.log("Oi !")
    }
}
// escrevaOi()

// exercicio 6

// considere o array abaixo para os testes

const arrayEx6 = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// a) Escreva uma função que receba um array de numeros e devolva a quantidade de elementos nele 

function arrayNumeros() {
    return arrayEx6.length
}

// console.log(arrayNumeros())

// b) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function parOuImpar(valor) {
    if (valor % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(parOuImpar(10))

// c) Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele

function arrayNum() {
    let arrayC = [];
    for (let i = 0; i < arrayEx6.length; i++) {
        if (arrayEx6[i] % 2 === 0) {
            arrayC.push(arrayEx6[i])
        }
    }
    return arrayC.length
}
console.log(arrayNum())

// d) Reescreva seu codigo anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o numero é par

function parD() {
    for (let i = 0; i < arrayEx6.length; i++) {
       if(parOuImpar(arrayEx6[i])){
           console.log(arrayEx6[i])
       }
    }
}
parD()




