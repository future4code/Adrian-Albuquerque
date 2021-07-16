// Observe a função a seguir
type Estartisticas = {
    maior: number;
    menor: number;
    media: number;
  };

function obterEstatisticas(numeros: number[]) {

  const numerosOrdenados = numeros.sort((a, b) => a - b);

  let soma: number = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas: Estartisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}

// a) Quais são as entradas e saídas dessa função?

// R) a entrada será um array de números onde o algoritmo faz a ordenação e na saida sairá a ordem maior, menor e a média de todos os numeros no array.

// b) Que outras variáveis compõem essa função? Explicite a tipagem de todas elas.

// O algoritmo de ordenação é composto por uma constante numerosOrdenados, onde é armazenada os valores que passaram por um sort e foram ordenados, em seguida temos uma let de soma com o tipo numérico recebendo o valor inicial de 0. e Além das variaveis num e numeros (ambas com o tipo number) dentro de uma estrutura de repetição for e o objeto estartisticas, onde é retornado os valores tratados pela função.

// c) Crie um type para representar uma amostra de dados, isto é, um objeto com as chaves numeros e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:


type AmostraDeIdades = {
    numeros: number[],
    obterEstatisticas: (number: number[]) => Estartisticas
  }
  
  const amostraDeIdades: AmostraDeIdades = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas
  }


