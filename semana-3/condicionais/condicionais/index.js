// ----------------------> Exemplos <---------------------------

console.log('Olá, Paiva!')

// ----------------------> Exercicio 1 <---------------------------

//leia o codigo abaixo

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//     console.log("Passou no teste.")
// } else {
//     console.log("Não passou no teste.")
// }

//Explique o que o código faz. Qual o teste que ele realiza? Para que tipos de números ele imprime no console "Passou no teste"? Para que tipos de números a mensagem é "Não passou no teste"?

//analisa se o numero é par ou impar, sendo par o resto da divisao pego pelo numero % 2, se for 0 o numero é par por sua divisao resultar em um numero inteiro sem restos da divisao, dando um valor diferente de 0 ele é impar !

// ----------------------> Exercicio 2 <---------------------------

// O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado. Veja abaixo:


// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//     case "Laranja":
//         preco = 3.5
//         break;
//     case "Maçã":
//         preco = 2.25
//         break;
//     case "Uva":
//         preco = 0.30
//         break;
//     case "Pêra":
//         preco = 5.5
//         break; // BREAK PARA O ITEM c.
//     default:
//         preco = 5
//         break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?

// R) É feito uma pergunta ao usuario pelo prompt para escolher uma fruta, o switch faz a analise e se a fruta for: Laranja, Maçã, uva ou Pêra é dado um valor de seu custo, caso a fruta inseria não caia em nenhum dos casos ele recebe o valor 5 e é imprimido o que você inseriu no console.log

// b_ Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

// R) Será passado ao console o valor de 2.25 para a maçã por cair no segundo switch case 

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

// R) Pêra vai receber o valor de 5 ao invés de 5.5, por pegar o break mais proximo, assim capturando o default

// ----------------------> Exercicio 3 <---------------------------

// Leia o código abaixo:

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	// let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a. O que a primeira linha está fazendo?

// R) a constante numero ta recebendo o valor  numerico de prompt 

// b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

// R) Há um erro na variavel mensagem, ela foi declarada dentro do escopo filho e não é acessado pelo escopo global

// c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

// R) Sim, escopo filho não é acessado pelo escopo global, a menos que ele seja declarado no global ou utilizando o var.

// ----------------------> Exercicio 4 <---------------------------

// Vamos criar programas que lidem com entradas do usuário! Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

// 1. Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

// let idadeUser = Number(prompt("Digite sua idade: "))

// 2. Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

// R) garantido :P

// 3. Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."

// if (idadeUser >= 18) {
//     console.log("Você pode dirigir !")
// } else {
//     console.log("Você é menor de idade, não pode dirigir !")
// }

// ----------------------> Exercicio 5 <---------------------------

// Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// - Exemplo

//     Se o usuário digitar "V", a saída deve ser:

//     "Boa Tarde!"

// let turnoDia = prompt("Qual turno você estuda ? M, N ou V ").toUpperCase()

// if (turnoDia === 'M') {
//     console.log("Bom dia !")
// } else if (turnoDia === 'V') {
//     console.log("Boa Tarde !")
// } else if (turnoDia === 'N') {
//     console.log("Boa Noite !")
// } else {
//     console.log("Valor Inválido !")
// }


// ----------------------> Exercicio 6 <---------------------------

// switch (turnoDia) {
//     case 'M':
//         console.log("Bom dia !")
//         break;
//     case 'V':
//         console.log("Boa Tarde !")
//         break;
//     case 'N':
//         console.log("Boa Noite !")
//         break;
//     default:
//         console.log("Valor inválido !")
//         break;
// }

// ----------------------> Exercicio 7 <---------------------------

// Considere a situação: você vai no cinema com um amigo ou amiga, porém ele/ela só assiste filme do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

/*
let amigoChato, ingressoFilme, generoFilme;
generoFilme = prompt("Qual o gênero do filme ?").toLowerCase().trim();
ingressoFilme = Number(prompt("Qual o valor do ingresso do filme ?"))

if (generoFilme == 'fantasia' && ingressoFilme < 15) {
    console.log("Bom filme :P")
} else {
    console.log("Seu amigo(a) chato(a) não vai ver esse filme !")
}
*/

// ----------------------> Desafio 1<---------------------------

// Modifique o código do exercício 7 para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo `prompt` que snack ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "... com `[SNACK]`", trocando [SNACK] pelo que o usuário colocou no input.

// let amigoChato, ingressoFilme, generoFilme;
// generoFilme = prompt("Qual o gênero do filme ?").toLowerCase().trim();
// ingressoFilme = Number(prompt("Qual o valor do ingresso do filme ?"))
// lanche = prompt("Qual Lanche você vai escolher ?\n Pipoca, Chocolate ou Doces ")
// if (generoFilme == 'fantasia' && ingressoFilme < 15) {
// console.log(`Sua escolha foi ${lanche}, Bom filme :P"`)
// } else {
// console.log("Seu amigo(a) chato(a) não vai ver esse filme !")
// }



// ----------------------> Desafio 2<---------------------------

// Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações.

// - Nome completo;
// - Tipo de jogo: IN indica internacional; e DO indica doméstico;
// - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
// - Categoria: pode ser as opções 1, 2, 3 ou 4;
// - Quantidade de ingressos

// - Nome completo;
// - Tipo de jogo: IN indica internacional; e DO indica doméstico;
// - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
// - Categoria: pode ser as opções 1, 2, 3 ou 4;
// - Quantidade de ingressos

// Declaração das variáveis
let nomeCompleto = prompt("Digite seu nome completo: ")
let tipoJogo = prompt("Qual o tipo de jogo ?\n IN=Internacional || DO=Domestico").toUpperCase();
let etapaJogo = prompt("Qual a etapa do jogo ?\n SF = Semi final || DT = Decisão 3ºLugar || FI = Final").toUpperCase()
let categoriaJogo = Number(prompt("Qual a catégoria do jogo ?\n 1 || 2 || 3 || 4 ?"))
let ingressoJogo = Number(prompt("Quantos ingressos serão adquiridos ?"))
let precoIngresso = 0;
let Pagamento;
let dinheiro;

// Valores de Input
console.log(`
valores sem tratamento:
Nome completo: ${nomeCompleto}
Tipo do Jogo: ${tipoJogo}
Etapa do jogo: ${etapaJogo}
Categoria do Jogo: ${categoriaJogo}
Quantidade de Ingressos: ${ingressoJogo}
`)

// Lógica do Algoritmo

// Tipo do Jogo
if (tipoJogo == 'IN') {
    tipoJogo = 'Internacional'
} else if (tipoJogo == 'DO') {
    tipoJogo = 'Domestico'
} else {
    tipoJogo = 'Valor Inválido'
}

// Etapa do Jogo
switch (etapaJogo) {
    case 'SF':
        etapaJogo = 'Semi-Final'
        break;
    case 'DT':
        etapaJogo = 'Decisão do 3º'
        break;
    case 'FI':
        etapaJogo = 'Final'
        break;
    default:
        etapaJogo = 'Valor Inválido'
        break;
}

// Categoria ** switch case é limitado, n vai funcionar :( **
// switch (categoriaJogo) {
//     case 1:
//         precoIngresso = 1320;
//         break;
//     case 2:
//         precoIngresso = 880;
//         break;
//     case 3:
//         precoIngresso = 550;
//         break;
//     case 4:
//         precoIngresso = 220;
//         break;
//     default:
//         break;
// }

// Se a etapa do jogo for Semi final com todas as categorais possiveis o valor do preço do ingresso é inserido.
if (etapaJogo == 'Semi-Final' && categoriaJogo == 1) {
    precoIngresso = 1320;
} else if (etapaJogo == 'Semi-Final' && categoriaJogo == 2) {
    precoIngresso = 880;
} else if (etapaJogo == 'Semi-Final' && categoriaJogo == 3) {
    precoIngresso = 550;
} else if (etapaJogo == 'Semi-Final' && categoriaJogo == 4) {
    precoIngresso = 220;
}

// Se a etapa do jogo for a Decisão 3 lugar o valor do preço do ingresso é inserido de acordo com o algoritmo:
if (etapaJogo == 'Decisão do 3º' && categoriaJogo == 1) {
    precoIngresso = 660;
} else if (etapaJogo == 'Decisão do 3º' && categoriaJogo == 2) {
    precoIngresso = 440;
} else if (etapaJogo == 'Decisão do 3º' && categoriaJogo == 3) {
    precoIngresso = 330;
} else if (etapaJogo == 'Decisão do 3º' && categoriaJogo == 4) {
    precoIngresso = 170;
}

// Se a etapa do jogo for a Fase final o valor do preço do ingresso é inserido de acordo com o algoritmo:
if (etapaJogo == 'Final' && categoriaJogo == 1) {
    precoIngresso = 1980;
} else if (etapaJogo == 'Final' && categoriaJogo == 2) {
    precoIngresso = 1320;
} else if (etapaJogo == 'Final' && categoriaJogo == 3) {
    precoIngresso = 880;
} else if (etapaJogo == 'Final' && categoriaJogo == 4) {
    precoIngresso = 330;
}

// Domestico
if (tipoJogo == 'Domestico') {
    dinheiro = precoIngresso * ingressoJogo;
    realConvert = dinheiro.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })
    let precoReal = precoIngresso.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })

    console.log(`
Domestico
Nome completo: ${nomeCompleto}
Tipo do Jogo: ${tipoJogo}
Etapa do jogo: ${etapaJogo}
Categoria do Jogo: ${categoriaJogo}
Quantidade de Ingressos: ${ingressoJogo}
-----------------------------
Valor Unitário: ${precoReal}
Pagamento: ${realConvert}
`)

    // Internacional
} else if (tipoJogo == 'Internacional') {

    let convercaoDolar = precoIngresso * ingressoJogo;
    let realDolar = parseFloat(convercaoDolar / 4.10);
    dinheiro = realDolar.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'USD'
    })
    let ingressoDolar = parseFloat(precoIngresso / 4.10)
    let precoDolar = ingressoDolar.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'USD'
    })

    console.log(`
    Internacional
    Nome completo: ${nomeCompleto}
    Tipo do Jogo: ${tipoJogo}
    Etapa do jogo: ${etapaJogo}
    Categoria do Jogo: ${categoriaJogo}
    Quantidade de Ingressos: ${ingressoJogo}
    -----------------------------
    valor Unitário: ${precoDolar}
    Pagamento: ${dinheiro}
    `)
} else {
    console.log("Ocorreu um erro, Verifique suas informações !")
}