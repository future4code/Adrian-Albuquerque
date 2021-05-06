// 1) Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

const bool1 = true // recebe um valor verdadeiro
const bool2 = false // recebe um valor falso
const bool3 = !bool2 // recebe a negação da variavel bool2, ficando verdadeiro

let resultado = bool1 && bool2
console.log("a. ", resultado) // resultado falso, o bool2 não é verdadeiro

resultado = bool1 && bool2 && bool3 //falso
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool1) 
// a variavel resultado recebeu o valor falso na questão b, sendo negado recebendo o valor verdadeiro, pipeline por um dos valores ser verdadeiro recebe verdadeiro,
console.log("c. ", resultado)

console.log("e. ", typeof resultado)
// resultado é um valor booleano

// 2) Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array)

// recebe valor undefined, variavel array nao recebeu nenhum valor definido

array = null
console.log('b. ', array) 

// array recebe o valor nulo

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

//array recebe 11 valores e é mostrado pelo length no console

let i = 0
console.log('d. ', array[i])

// o indice do array recebe o valor de i que é 0, mostrando assim o primeiro valor na posição [0]

array[i+1] = 19 

// array com o indice [1] vai receber o valor de 19

console.log('e. ', array)

//imprime o array com o alor alterado

const valor = array[i+6] 

//  é declarada uma nova constante, recebendo o valor do array i que vale 0 somado com 6

console.log('f. ', valor)

// exibe o resultado da soma de i com a o indice 0 do array. ficando com 9

// exercicios de escrita de codigo

// 1) Faça um programa que:
// a. Pergunte a idade do usuário
// b. Pergunte a idade do seu melhor amigo ou da sua melhor amiga

// let idadeUsuario = Number(prompt('Quantos anos você tem ?'))
// let idadeAmigo = Number(prompt('Qual sua idade ?'))
// console.log(typeof idadeAmigo, typeof idadeAmigo, idadeAmigo, idadeUsuario)



// 2) Faça um programa que:
// a. Peça ao usuário que insira um número par.

let numPar = Number(prompt('Digite um numero par'))
console.log('Resto da divisão: ', numPar % 2)

// Quando o numero é par, o mod desse valor é 0
// se o valor for != de 0 é impar

// 3) Faça um programa, seguindo os passos:

// a. Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas

// b. Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

// c. Imprima o array no console

// d. Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

// e. Remova da lista o item de índice que o usuário escolheu.

// f. Imprima o array no console

let listaDeTarefas = [];

listaDeTarefas[0] = prompt('Qual a sua primeira tarefa hoje ?')
listaDeTarefas[1] = prompt('Qual sua segunda tarefa ?')
listaDeTarefas[2] = prompt('Qual sua ultima tarefa ?')

console.log(listaDeTarefas)

let Indice;

indice = Number(prompt('Digite o indice da tarefa que será realizada(0, 1 ou 2)'))

listaDeTarefas = listaDeTarefas.splice(1, indice)
console.log(listaDeTarefas)

// 4) Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima no console a seguinte mensagem:
// O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!
let emailDoUsuario, nomeDoUsuario;
nomeDoUsuario = prompt('Qual seu nome ?')
emailDoUsuario = prompt('Qual seu email ?')
console.log(`O E-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario} !`)