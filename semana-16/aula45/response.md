# Aula45

## Exercício 1

### a) Nesta tabela, utilizamos o **FLOAT** para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.

- Está sendo criado uma tabela com o nome **Actor** com os seguintes valores:
- id - String com no máximo 255 caracteres funcionando como uma chave primária;
- name - String com no máximo 255 caracteres onde seu valor não pode ser vazio;
- salary - Numero de ponto flutuante (fazem parte do conjunto de numeros reais) e não podem receber um valor vazio;
- birth_date - Recebe uma data e não pode estar vazio;
- gender - String com no máximo 6 caracteres que não pode ter seu valor vazio;

### b) O comando **SHOW** é bem útil para nos prover informações sobre bancos, tabelas, e mais; Utilize os comandos; SHOW **DATABASES** e **SHOW TABLES**. Explique os resultados.

- O comando **SHOW DATABASES** retorna todos os bancos de dados encontrados;
- O comando **SHOW TABLES** mostra todas as tabelas criadas, como por exemplo a tabela actor;

### c) O comando **DESCRIBE** pode ser usado para ver estruturas de uma tabela. Utilize o comando **DESCRIBE** Actor e explicque os resultados.

- Retornou todos os valores que foram inseridos na criação da tabela, mas como não foram inseridos nada todos os campos estão **NULL**;

## Exercício 2

### a) Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.00 e data de nascimento 23 de Agosto de 1963.

- INSERT INTO Actor (id, name, salary, birth_date, gender)
  VALUES(
  "002",
  "Glória Pires",
  1200000,
  "1963-08-23",
  "female"
  );

### b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.

- **Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'**;
- Entrada duplicada para a chave primária "002";
- o MySQL não permitiu a criação de uma nova linha porque já existe uma chave criada com o mesmo valor, já que o valor da chave precisa ser único.

## Exercício 3

### a) Escreva uma query que retorne todas as informações das atrizes.

- SELECT * FROM Actor WHERE gender = "female";

### b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos.

- SELECT salary FROM Actor WHERE name = "Tony Ramos";

### c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.

- SELECT * FROM Actor WHERE gender = "invalid";
- Retornou valores NULL já que não foi encontrado nenhum dato com o valor invalid.

### d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000.

- SELECT id, name salary FROM Actor WHERE salary > 500000;

### e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta.

- Error Code: 1054. Unknown column 'nome' in 'field list';
- Não existe uma coluna "nome" no campor de lista;
- O valor cadastrado na tabela foi "name" e não "nome";
- SELECT id, name FROM Actor WHERE id = "002";

## Exercício 4

SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000

### a) Explique com as suas palavras a query acima

- Selecione tudo da tabela Actor enquanto o nome começar com a letra A ou o nome começar com a letra J e o salário for maior que 300 mil reais

### b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00

- SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000;

### c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.

- SELECT * FROM Actor WHERE (name LIKE "%g%" OR "%G%");

### d) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00.

- SELECT * FROM Actor WHERE (name like "%a%" OR "%A%" OR "%g%" OR "%G%") AND salary BETWEEN 350000 AND 900000;

## Exercício 5

**Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar. Explique a query resumidamente.**

- CREATE TABLE Filmes(
  id INT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  sinopse TEXT NOT NULL,
  data_lancamento DATE NOT NULL,
  avaliacao VARCHAR(2) NOT NULL
  );

### A) Crie 4 filmes.

- INSERT INTO Filmes(id, nome, sinopse, data_lancamento, avaliacao)
  VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006/01/06",
  "09"
  );

  - INSERT INTO Filmes(id, nome, sinopse, data_lancamento, avaliacao)
    VALUES(
    "002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012/12/27",
    "10"
    );

- INSERT INTO Filmes(id, nome, sinopse, data_lancamento, avaliacao)
  VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017/11/02",
  "8"
  );

- INSERT INTO Filmes(id, nome, sinopse, data_lancamento, avaliacao)
  VALUES(
  "004",
  "Tropa de Elite",
  "Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano. Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar. Em meio a um tiroteio, Nascimento e sua equipe resgatam Neto e Matias, dois aspirantes a oficiais da PM. Ansiosos para entrar em ação e impressionados com a eficiência de seus salvadores, os dois se candidatam ao curso de formação da Tropa de Elite.",
  "2007/10/05",
  "8"
  );

## Exercicio 6

**Escreva uma query que:**

a) Retorne o id, titulo e avaliação a partir de um id específico;

- SELECT id, titulo, avaliacao
- SELECT id, nome, avaliacao FROM Filmes WHERE id = 02;

b) Retorne um filme a partir de um nome especifico;

- SELECT * FROM Filmes WHERE nome = "Tropa de Elite";

c) Retorne o id, titulo e sinopse dos filmes com avaliação minima de 7;

- SELECT id, nome, sinopse FROM Filmes WHERE avaliacao >= 7

## Exercício 7

**Escreva uma query que:**

a) Retorna um filme cujo titulo contenha a palavra vida;

- SELECT * FROM Filmes WHERE (sinopse LIKE "%vida%");

b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer TERMO DE BUSCA para exemplificar.

- SELECT * FROM Filmes WHERE (nome LIKE "%lite%");

c) Procure por todos os filmes que já tenham lançado.

- SELECT * FROM Filmes WHERE (data_lancamento NOT LIKE "%2022%");

d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7.

- SELECT * FROM Filmes WHERE (data_lancamento NOT LIKE "%2022%") AND avaliacao > 7;
