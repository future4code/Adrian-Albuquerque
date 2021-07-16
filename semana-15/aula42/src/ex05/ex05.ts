type valores = {
  soma: number;
  subtracao: number;
  multiplicacao: number;
  maiorValor: number;
};

const calculadora = (a: number, b: number): void => {
  const result: valores = {
    soma: a + b,
    subtracao: a - b,
    multiplicacao: a * b,
    maiorValor: a > b ? a : b,
  };
  console.log(result);
};

calculadora(50, 10);