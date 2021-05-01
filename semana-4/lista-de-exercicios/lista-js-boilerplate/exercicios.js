//Exercício 1

function inverteArray(array) {
   const arrayInvertido = []
   for (let i = array.length - 1; i >= 0; i--) {
      arrayInvertido.push(array[i])
   }
   return arrayInvertido
}

//Exercício 2

function retornaNumerosParesElevadosADois(array) {
   // implemente sua lógica aqui
   let arrayPar = [];
   for (let i = 0; i <= array.length; i++) {
      if (array[i] % 2 === 0) {
         arrayPar.push(array[i])
      }
   }
   for (let i = 0; i < arrayPar.length; i++) {
      arrayPar[i] = arrayPar[i] ** 2
   }
   return arrayPar
}

//Exercício 3

function retornaNumerosPares(array) {
   // implemente sua lógica aqui
   let arrayPares = [];
   for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
         arrayPares.push(array[i])
      }
   }
   return arrayPares
}

//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
   return Math.max.apply(null, array)
}

//Exercício 5

function retornaQuantidadeElementos(array) {
   // implemente sua lógica aqui
   return array.length;
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // // implemente sua lógica aqui
   // const booleano1 = true;
   // const booleano2 = false;
   // const booleano3 = !booleano2; //true
   // const booleano4 = !booleano3 // false
   // // a) false
   // console.log(booleano1 && booleano2 && !booleano4) 
   // // b) false 
   // console.log(booleano1 && booleano2 || !booleano3)
   // // c) true
   // console.log(booleano2 || booleano3 || !booleano3)
   // // d) true
   // console.log(!(booleano2 && booleano3) || (!booleano4 & booleano3 && booleano3))
   // // e) true
   // console.log(!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3))
   const arrayBooleana = [false, false, true, true, true]
   return arrayBooleana
}


//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
   const arrayPar = [];
   for (let i = 0; arrayPar.length < n; i++) {
      if (i % 2 === 0) {
         arrayPar.push(i)
      }
   }
   return arrayPar
}

// Exercício 8

function checaTriangulo(a, b, c) {
   // implemente sua lógica aqui
   if (a === b && b === c) {
      return 'Equilátero'
   } else if (a === b || b === c || c == a) {
      return 'Isósceles'
   } else {
      return 'Escaleno'
   }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
   let maiorNumero;
   let menorNumero;
   let maiorDivisivel;
   if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
   } else {
      maiorNumero = num2;
      menorNumero = num1;
   }


}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
   let segundoArray = [];

}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
   const filmeFav = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }

   return filmeFav;
}

// Exercício 13

function imprimeChamada(funcao) {
   // implemente sua lógica aqui
   const filmeFav = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', ' Anne Hathaway', ' Emily Blunt', ' Stanley Tucci']
   }
   return(`Venha assistir ao filme ${filmeFav.nome}, de ${filmeFav.ano}, dirigido por ${filmeFav.diretor} e estrelado por ${filmeFav.atores}.`)
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
   let retangulo = {largura: lado1, altura: lado2, perimetro: (lado1 * 2) + (lado2 * 2) , area: lado1 * lado2}
   return retangulo

}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [{
      nome: "Pedro",
      idade: 20
   },
   {
      nome: "João",
      idade: 10
   },
   {
      nome: "Paula",
      idade: 12
   },
   {
      nome: "Artur",
      idade: 89
   }
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [{
      nome: "Paula",
      idade: 12,
      altura: 1.8
   },
   {
      nome: "João",
      idade: 20,
      altura: 1.3
   },
   {
      nome: "Pedro",
      idade: 15,
      altura: 1.9
   },
   {
      nome: "Luciano",
      idade: 22,
      altura: 1.8
   },
   {
      nome: "Artur",
      idade: 10,
      altura: 1.2
   },
   {
      nome: "Soter",
      idade: 70,
      altura: 1.9
   }
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultasNome = [{
      nome: "João",
      dataDaConsulta: "01/10/2021"
   },
   {
      nome: "Pedro",
      dataDaConsulta: "02/07/2021"
   },
   {
      nome: "Paula",
      dataDaConsulta: "03/11/2021"
   },
   {
      nome: "Márcia",
      dataDaConsulta: "04/05/2021"
   }
]

//Exercício 19, letra A

function ordenaPorNome() {

}

// Exercício 19, letra B

const consultasData = [{
      nome: "João",
      dataDaConsulta: "01/10/2021"
   },
   {
      nome: "Pedro",
      dataDaConsulta: "02/07/2021"
   },
   {
      nome: "Paula",
      dataDaConsulta: "03/11/2021"
   },
   {
      nome: "Márcia",
      dataDaConsulta: "04/05/2021"
   }
]

function ordenaPorData() {

}

//Exercício 20

const contas = [{
      cliente: "João",
      saldoTotal: 1000,
      compras: [100, 200, 300]
   },
   {
      cliente: "Paula",
      saldoTotal: 7500,
      compras: [200, 1040]
   },
   {
      cliente: "Pedro",
      saldoTotal: 10000,
      compras: [5140, 6100, 100, 2000]
   },
   {
      cliente: "Luciano",
      saldoTotal: 100,
      compras: [100, 200, 1700]
   },
   {
      cliente: "Artur",
      saldoTotal: 1800,
      compras: [200, 300]
   },
   {
      cliente: "Soter",
      saldoTotal: 1200,
      compras: []
   }
]

function atualizaSaldo() {
   // implemente sua lógica aqui
}