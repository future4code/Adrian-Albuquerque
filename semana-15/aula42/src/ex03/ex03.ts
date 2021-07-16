type Posts = {
  autor: string;
  texto: string;
};

const posts: Posts[] = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver",
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!",
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!",
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!",
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!",
  },
];

function buscarPostsPorAutor(posts: Posts[], autorInformado: string) {
  return posts.filter((post) => {
    return post.autor === autorInformado;
  });
}
// b) a entrada da função é um array de informações com autores e textos e uma string informando quem será procurado.