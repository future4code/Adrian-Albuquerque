let nome;
let idade;
let endereço;
let cor;
let comida;


 nome = prompt("Qual o seu nome ?")
console.log('Resposta: ' + nome)
idade = prompt("Qual sua idade ?")
console.log('Resposta: ' + idade)
 endereço = prompt("Onde você mora ?")
console.log('Resposta: ' + endereço)
cor = prompt("Qual sua cor favorita ?")
console.log('Resposta: ' + cor)
comida = prompt("Qual sua comida favorita ?")
 console.log ('Resposta: ' + comida)

// Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

comidaFav = ["macarronada", "pizza", "salada", "camarão", "coxinha"]
// Imprima no console o array completo
console.log(comidaFav)

// b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: 
// seguida por cada uma das comidas, **uma embaixo da outra**.

console.log('Essas sao minhas comidas favoritas: ')
console.log(comidaFav[0])
console.log(comidaFav[1])
console.log(comidaFav[2])
console.log(comidaFav[3])
console.log(comidaFav[4])

// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida.
//  Troque a segunda comida da sua lista pela inserida pelo usuário. 
// Imprima no  console a nova lista.

comidaFav[1] = prompt("Qual sua comida favorita ?")
console.log(comidaFav[1])

// 4. Faça um programa que contenha um array com 3 perguntas de Sim ou Não
// armazenado em uma variável.Por exemplo: "Você está usando uma roupa azul hoje?".Depois, siga os passos:

let arrayPerguntas = ["Você bebeu água hoje ?", "Lais Petra colocou musica de sofrencia na aula de hoje ?", "Hoje é sexta feira ?"]

// a) Crie uma nova variável, contendo um array com as três respostas.Utilize o tipo booleano(true ou false) para cada resposta.

let arrayResposta = [true, true, false]

// b) Imprima no console todas as perguntas seguidas por suas respectivas respostas.

console.log(arrayPerguntas[0], arrayResposta[0])
console.log(arrayPerguntas[1], arrayResposta[1])
console.log(arrayPerguntas[2], arrayResposta[2])
