var calculadora = function (a, b) {
    var result = {
        soma: a + b,
        subtracao: a - b,
        multiplicacao: a * b,
        maiorValor: a > b ? a : b
    };
    console.log(result);
    return result;
};
calculadora(50, 10);
