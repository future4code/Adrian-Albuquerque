# Tasks

Vamos começar fazendo um endpoint que busque todos os usuários de uma lista. A lista está disponível abaixo.
## ex01
- Lista de usuários
**se encontra no userList.ts**

* a. Qual método HTTP você deve utilizar para isso?*

R) Como precisamos pegar todos os dados, um método GET seria o ideal.


* b. Como você indicaria a **entidade** que está sendo manipulada?*

R) pelo /users

## ex02
* a. Como você passou os parâmetros de type para a requisição? Por quê?

R) Os parâmetros são passados no link por querry, como por exemplo "/users?type=ADMIN" e é extraido no algoritmo com o req.querry
* b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?

R) transformando tanto usando Number(valor) ou valor as string e passando por dentro de um if/else para validação


## ex03

* a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui ?

R) Geralmente utilizamos parametros e capturamos na função do get, por exemplo "/users/user/:nome-do-usuario"

* b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.

R) Como o valor será utilizado dentro de alguma função de array, o retorno será um objeto caso não encontrar um usuário válido

## ex04 
* Fizemos algumas buscas no nosso conjunto de itens, agora é hora de adicionar coisas. Comecemos criando um usuário na nossa lista. Crie um endpoint que use o método POST para adicionar um item ao nosso conjunto de usuários.

* a. Mude o método do endpoint para PUT. O que mudou?

R) Agora ele faz uma alteração no objeto com o id selecionado

b. Você considera o método PUT apropriado para esta transação ? Por quê ?

R) Para a alteração em apenas um dos campos, com o put é necessário o envio de todos os dados do usuário diferente do PATCH 

