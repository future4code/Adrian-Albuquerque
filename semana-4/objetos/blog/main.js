function criarPost() {
    let tituloPost = document.getElementById('titulo-post')
    let autorPost = document.getElementById('autor-post')
    let conteudoPostagem = document.getElementById('conteudo-post')
    let container = document.getElementById('container-de-posts')
    if (tituloPost && autorPost && conteudoPostagem != '') {
        container.innerHTML += `
        <p><strong>Titulo: </strong>${tituloPost.value}</p>
        <p>Autor: ${autorPost.value}</p>
        <p>Conteudo: ${conteudoPostagem.value}</p>`

        conteudoPostagem.value = autorPost.value = tituloPost.value = "";
    }
}