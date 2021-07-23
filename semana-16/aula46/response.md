# Aula 46

##  Exercício 1

### Leia os comandos abaixo e indique o que eles fazem. Não os rode nas tabelas desse projeto! Explique o que elas fariam se fossem rodadas.  Você, provavelmente, terá que fazer algumas pesquisas para responder;



##### a) ALTER TABLE Actor DROP COLUMN salary;

* Na tabela Actor será removido a coluna salary;

##### b)  ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

- Na tabela Actor será mudado o nome da coluna gender para sex e adicionando um valor máximo string de 6 caracteres;

##### c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

- Na tabela Actor será mudado o gender para gender e adicionado um valor string máximo de 255 caracteres;

##### d) *Agora,  altere a coluna* *gender* *da tabela* *ACTOR* *para que ele aceite strings com até 100 caracteres*

- ALTER TABLE Actor CHANGE gender gender VARCHAR(100);



### Exercício 2

##### a)  *Escreva uma query que atualize o nome e a data de nascimento do ator com o id* *003*

- UPDATE Actor SET name = "AAAAAA" birth_date = "1964-10-26" WHERE id = 003;

##### b)  *Escreva uma query que atualize o nome da atriz* *Juliana Paes* *para* *JULIANA PAES*. Então, escreva outra query para voltar ao nome anterior.*

- UPDATE Actor SET name= "JULIANA PAES" WHERE name = "juliana paes";

##### c) *Escreva uma query que atualize todas as informações do ator com o id* *005*

- UPDATE Actor SET name = "Juliana Paes" salary = "1000" birth_date = "2000-01-01" gender = "male" hometown = "Taubaté" favorite_ice_cream = "COCO" WHERE id = 005;

##### d) *Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.* 

- UPDATE Actor SET name = "bananinha" WHERE id = 4343;

### Exercício 3

##### a)  *Escreva uma query que apague a atriz com o nome* *Fernanda Montenegro*

- DELETE FROM Actor WHERE name = "Fernanda Montenegro";

##### b)  *Escreva uma query que apague todos os atores (do gênero* ***male***) com o salário maior do que R$1.000.000,00*

- DELETE * FROM Actor WHERE salary > 1000000

### Exercício 4

##### a) *Escreva uma query que pegue o maior salário de todos os atores e atrizes*

- SELECT MAX(salary) FROM Actor;

##### b) *Escreva uma query que pegue o menor salário das atrizes*

- SELECT MIN(salary) FROM Actor;

##### c) *Escreva uma query que pegue a quantidade de atrizes*

- SELECT COUNT(*) FROM Actor;

##### d) *Escreva uma query que pegue a soma de todos os salários*

- SELECT SUM(salary) FROM Actor;

### Exercício 5 

SELECT COUNT(*), gender FROM Actor GROUP BY gender

##### a) *Releia a última query. Teste-a. Explique o resultado com as suas palavras*

- Retorna todos os items da coluna genero agrupados por com o nome "gender"

##### b)   *Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética*

- 

##### c) *Faça uma query que retorne todos os atores ordenados pelo salário*

- SELECT COUNT(id, nome) FROM Actor ORDER BY salary ASC GROUP BY salario;

##### d) *Faça uma query que retorne os atores com os três maiores salarios*

- SELECT COUNT(salary)  FROM Actor ORDER BY salary ASC LIMIT 3;

##### e) *Faça uma query que retorne a média de salário por gênero*

-  SELECT AVG(salary), gender FROM Actor GROUP BY gender;

### Exercício 6

##### a) *Altere a tabela de* *Movie* *e adicione um novo parâmetro:* *playing_limit_date* *que indique a data limite em que o filme será passado no cinema.* 

- ALTER TABLE Filmes ADD playing_limit_date DATE;

##### b) *Altere a tabela de* *Movie* *para que o parâmetro* *rating* *possa aceitar valores não inteiros, como, por exemplo, uma avaliação* *8.5**.*

- ALTER TABLE Filmes CHANGE

##### c) *Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído*

- UPDATE Filmes SET playing_limit_date = "2020-12-31" WHERE id = "001";

##### d) *Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.*

- DELETE FROM Filmes WHERE id = "001";

### Exercício 7

#### a) *Quantos filmes em cartaz possuem avaliações maiores do que* *7.5**?*

- SELECT COUNT(*) FROM FIlmes WHERE classificacao > 7.5;

#### b) *Qual a média das avaliações dos filmes?*

- SELECT AVG(classificacao) FROM Filmes;

#### c) *Qual a quantidade de filmes em cartaz?*

- SELECT COUNT(*) FROM Filmes WHERE playing_limit_date > CURDATE();

#### d) *Qual a quantidade de filmes que ainda irão lançar?*

- SELECT COUNT(*) FROM Filmes WHERE release_date > CURDATE();

#### e) *Qual a maior nota dos filmes?*

- SELECT MAX(classificacao) FROM Filmes;

#### f) *Qual a menor nota dos filmes?*

- SELECT MIN(classificacao) FROM Filmes;

### Exercício 8

#### a) *Retorne todos os filmes em ordem alfabética*

- SELECT * FROM Filmes ORDER BY titulo;

#### b)  *Retorne os 5 primerios filmes em ordem descrente alfabética* 

- SELECT * FROM Filmes ORDER BY titulo LIMIT 5;

#### c) *Retorne os 3 filmes mais recentes em cartaz*

- SELECT * FROM Filmes WHERE release_date < CURDATE() ORDER BY release_date DESC LIMIT 3;

#### d) *Retorne os 3 filmes melhor avalidos*

- SELECT * FROM Filmes ORDER BY classificacao DESC LIMIT 3;

































