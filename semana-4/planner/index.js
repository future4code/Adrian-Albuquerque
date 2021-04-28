const criarTarefa = () => {
    let minhaTarefa = document.getElementById('tarefa') // Captura a tarefa
    const diasSemana = document.getElementById('dias-semana').value // Captura o dia da semana
    let semana = document.getElementById(diasSemana);

    if (minhaTarefa.value != '') {
        semana.innerHTML += `<li>${minhaTarefa.value}</li>`
        minhaTarefa.value = ''
    } else {
        alert("Digite um valor válido !")
    }
}
function apagarTarefa() {
    semana.innerHTML = ''
}

function riscarTarefa() {
    const riscar = document.getElementsByTagName('li')
    riscar.style.textDecoration = "line-through"
}