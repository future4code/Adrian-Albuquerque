// -------------------- Exercicio 1 --------------------

// O que o código abaixo está fazendo? Qual o resultado impresso no console?
console.log("EX1")
let valor = 0
for (let i = 0; i < 5; i++) {
    valor += i
}
console.log(valor)

// R) o Valor acumula os valores de I durante sua repetição

// -------------------- Exercicio 2 --------------------

// Leia o código abaixo:

console.log("EX2")
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
    if (numero > 18) {
        console.log(numero)
    }
}

// a) O que vai ser impresso no console?

// R) dentro do IF ele só seleciona valores maiores que 18

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

// R) a estrutura de repetição While, com o index do array do contador

// -------------------- Exercicio 3 --------------------

// Nas perguntas abaixo, considere que você tenha acesso a um array  (chamado de 'array original') que seja composto somente de números. Após o enunciado, há um exemplo de qual deve ser a resposta final de cada programa individualmente.

/* a) escreva um programa que:
 * Imprima cada um dos valores do array original.
 * Imprima cada um dos valores do array original divididos por 10
 * Crie um novo array contendo, somente, os números pares do array original
 * Imprima esse novo array
 * Imprima o index e os valores do array da seguinte forma: "O elemento do index I é: numero"
 * escreva um programa que imprima no console o maior e o menor número contidos no array original
 */
console.log("a)")
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (const valores of arrayOriginal) {
    console.log(valores)
}

// -------------------- Desafio 1 --------------------