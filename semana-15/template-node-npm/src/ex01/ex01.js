const username = process.argv[2]
const age = Number(process.argv[3])

const params = process.argv.length -2

if(params < 2) {
    return console.log("É esperado 2 parâmetros")
} else {
    console.log(`Oi, ${username}, Você possui ${age} anos !!!`)
}