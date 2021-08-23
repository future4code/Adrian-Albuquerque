### Exercicio 1

a)  *Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?*

- A possibildiade de uma colisão em nossa aplicação será reduzida ao usar esse padrão de id que utiliza numeros e letras maiusculas e minusculas.

b) *A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.* 

- import { v4 } from "uuid";

  

  export class IdGenerator {

    public generateId(): string {

  ​    return v4();

    }

  }

### Exercicio 2

a) *Explique o código acima com as suas palavras.*

- O endpoint acima recebe como parametro o Id, email e senha de insere esses três dados no banco, da forma que está construida a responsabilidade de criacao do ID vêm do front-end o que não é uma boa prática.

b) *Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.*

- CREATE TABLE `paiva-2125405-adrian-albuquerque`.`aula55usuarios (
    `id` INT NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`));

c)  *Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.*

- Funcao createUser

### Exercicio 3

a) *O que a linha* *as string* *faz? Por que precisamos usar ela ali?*

- Garante que o que vai ser recebido será uma string

b)*Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função*.

- Funcao desenvolvida e sendo utilizada no endpoint createUser

### Exercicio 4

a) *Crie o endpoint que realize isso, com as funções que você implementou anteriormente*

- endpoint loginUser

b)  *Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um* *"@"*

- endpoints adotados com esse padrao

c)  *Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um* *"@*

- implementado



### Exercicio 5

a) *Crie uma função que retorne as informações de um usuário a partir do email*

- implementado, mas como foi pedido apenas id, email e senha não há informacoes relevantes a ser retornadas

### Exercicio 6

a) *Crie o endpoint que realize isso, com as funções que você implementou anteriormente*

- Implementado

b)  *Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um* *"@"*

- implementado

### Exercicio 7

a) *O que a linha* *as any* *faz? Por que precisamos usá-la ali?*

- Garante que o retorno será uma string

b) *Crie uma função que realize a mesma funcionalidade da função acima*

- Desenvolvido

### Exercicio 8

