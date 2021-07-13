// a) Crie uma variável minhaString do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

const myString: string = "Hello World";

// R) o valor atribuido esperado para myString é uma stringe ao inserir um valor diferente disso aponta um erro de coerencia.

// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como podemos fazer para que essa variável também aceite strings?

let myNumber: number;

// Para atribuir um outro tipo a uma variavel utilizamos o operador OR, exemplo:

let myNumberWichTwoTypes: number | string;

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
// nome, que é uma string;
// idade, que é um número;
// corFavorita, que é uma string.

const personObject = {
  name: "aaa",
  age: 19,
  favoriteColor: "gray",
};

//Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

type personPattern = {
  username: string;
  age: number;
  favoriteColor: string;
};

const person0: personPattern = {
  username: "Pokechijo",
  age: 23,
  favoriteColor: "red",
};

const person1: personPattern = {
  username: "sem criatividade",
  age: 19,
  favoriteColor: "green",
};

const person2: personPattern = {
  username: "aaa",
  age: 43,
  favoriteColor: "blue",
};

// ======================================================= \\

type personPatternWichRainbown = {
  username: string;
  age: number;
  favoriteColor: COLORS;
};

enum COLORS {
  VERMELHO = "VERMELHO",
  LARANJA = "laranja",
  AMARELO = "AMARELO",
  VERDE = "VERDE",
  AZUL = "AZUL",
  ANIL = "ANIL",
  VIOLETA = "VIOLETA",
}

const personRainbow0: personPattern = {
  username: "Pokechijo",
  age: 23,
  favoriteColor: COLORS.AMARELO,
};

const personRainbox1: personPattern = {
  username: "sem criatividade",
  age: 19,
  favoriteColor: COLORS.VERDE,
};

const personRainbow2: personPattern = {
  username: "aaa",
  age: 43,
  favoriteColor: COLORS.AZUL,
};
