### Exercício 1

a) Explique como é a resposta que temos quando usamos o raw.
- o raw é uma forma de utilizar comandos sql no Node, ele retorna exatamente o que vêm da nossa requisição do mySQL
b) Faça uma função que busque um ator pelo nome;
- funcao ***getuserByName***
c) Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. Para atrizes, female e para atores male.
-  funcao ***getUserByGender***

### Exercício 2

a) Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão
- funcao ***updateUserSalaryId***
b) Uma função que receba um id e delete um ator da tabela
- funcao ***deleteUser***
c) Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender
- funcao ***getAvgSalary***