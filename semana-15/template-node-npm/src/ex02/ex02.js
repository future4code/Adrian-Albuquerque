const mathOperator = process.argv[2]
const firstNumber = Number(process.argv[3])
const lastNumber = Number(process.argv[4])

switch (mathOperator) {
    case "add":
        return console.log(firstNumber + lastNumber)
    case "sub":
        return console.log(firstNumber - lastNumber)
    case "mult":
        return console.log(firstNumber * lastNumber)
    case "div":
        return console.log(firstNumber / lastNumber)
    default:
        return console.log("Digite um operador ou número válido \n Operadores: ADD, SUB, MULT, DIV")
}
