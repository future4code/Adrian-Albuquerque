# LabeX

## Considerações Iniciais

- Foi um projeto bem bacana onde tivemos que aprender muita coisa em cima da hora pra implementar tudo no nosso código e um projeto bem grande para ser individual, mas acredito que a intenção era nos desafiar a construir isso sozinho.
- Tive alguns problemas com a API e a resolução de sexta passada pelo Indio ajudou a melhorar o meu código, tinha coisas que eram apenas funções externas e eu fazia de custom hook e eram tantas requisições que davam problemas de CORS.

Email: astrodev@gmail.com
Senha: 123456
Surge: adrian-labex.surge.sh
Figma: https://www.figma.com/community/file/983811488259187690?fuid=978799209661702685

### O que funciona

- HomePage - Ok
- ListTripsPage - Ok
- ApplicationFormPage - Ok
- Login Page - Ok
- AdminHomePage - Ok
- TripDetailsPage - Ok
- CreateTripPage - Ok
- Pagina de erro - Ok
(Inclusive, a pagina de erro foi a pagina mais elaborada, oi chijokk)

- Funcionalidades vindas da API como:

#### Área de Usuário:
- Ver viagens;
- Se inscrever para viagens;

#### Área Admin:
- Login;
- Painel Administrativo;
- Exibição de viagens com opção de exclusão;
- Logout;
- Criação de novas viagens;
- Detalhes de candidatos pendentes para a viagem;
- Detalhes de candidatos aprovados para a viagem;

* Foi utilizado uma API para exibir todos os países disponíveis e por conta disso tornou um pouco mais demorado a implementação;

* Foi utilizado uma biblioteca para a animação do fundo da página;

* Foi utilizado SASS ao invés de Styled components;

* Como a API não disponibiliza imagens, criei um Switch case para de acordo com o planeta na área de viagens exibir como ele é;

# O que não funciona

## Gerais:
- Há muitos arquivos que não estão sendo utilizados;
- Botões do Material-UI customizados estão se repetindo em no código
* **Possível solução:***
- Theme Provider, porém foquei em integração e funcionalidades e infelizmente não sobrou tempo para pesquisar como ele funciona, nunca usei essa ferramenta.
- Switch case da fotos de planeta deve ser uma função externa recebendo props já que ela irá se repetir em algumas partes do site;
- Falta um 'polimento' no site, há muito código que não é necessário;

## Homepage:
- Falta estilização no foguete, o planejamento inicial seria uma animação de um foguete decolando onde iria usar keyframes já que não foi encontrado a animação pronta em bibliotecas externas;

## Área do usuário:
- Área de exibição de usuário há um hover em cada viagem, porém ao clicar não faz nada
* Possível solução:
- Ao clicar em uma viagem, redireciona o usuário a viagem selecionada sem a necessidade de usar o select para trocar de planeta
- 
## Área de Admin:
- Não tive tempo para implementar a funcionalidade de aprovar candidatos;
- Exibição de candidatos das viagens está com com vida própria, as vezes funciona, as vezes dá erros de network ou até funciona mas aponta um erro ao armazenar o que foi recebido na requisição no estado (???????)
***Possíveis soluções:***
- A requisição está sendo feita utilizando Custom hook, converter para apenas uma função de requisição deve resolver o problemas mas ainda não testei.
- Falta estilização na página de viagens;
- pagina de viagens está a informação do h1 errada;
- Falta estilização na página de de postagem da viagem;
- Ao excluir a viagem a página não atualiza e não exibe nenhum prompt ou algo do gênero pedindo a confirmação daquela exclusão, assim evitando acidentes;

### Considerações Finais
Projeto bastante complexo onde encontrei bugs que nem sabia que era possível e com certeza um desafio para fazer individualmente, mas consegui e o único limitador foi o tempo mesmo eu dedicando 100% do meu dia para desenvolve-lo (esqueci até de comer e passei horas madrugando para monta-lo, inclusive comecei a escrever a documentação as 4:30 da manhã do domingo). Porem haver bugs que não encontrei e tentei deixar o código o mais programado a objetos possível, separei coisas que se repetem mas nem tudo. E como no tech talk de sexta falaram sobre documentação... aqui estou eu !

_Hello World_ 

### Imagens
***Home Page***

![image](https://user-images.githubusercontent.com/73081422/121799961-944e6300-cc05-11eb-9a5a-28d0c9ff255d.png)

***Lista de viagens***

![image](https://user-images.githubusercontent.com/73081422/121800164-9664f180-cc06-11eb-9fa7-62557daffb29.png)

***Candidatar a viagem***
![image](https://user-images.githubusercontent.com/73081422/121844072-bef9f380-ccb9-11eb-80cc-01caf681d463.png)

***Login Page***

![image](https://user-images.githubusercontent.com/73081422/121844091-ccaf7900-ccb9-11eb-9300-db9472cd7321.png)

***Lista de viagens***

![image](https://user-images.githubusercontent.com/73081422/121800229-02dff080-cc07-11eb-8e63-410fb924b4a2.png)

***Detalhes da lista de viagens***

![image](https://user-images.githubusercontent.com/73081422/121800241-2145ec00-cc07-11eb-9a9b-7a4984c5825d.png)

***Criar viagens***

![image](https://user-images.githubusercontent.com/73081422/121800252-3589e900-cc07-11eb-91af-a9cf66aba8d9.png)

***Página de erro***

Ai você precisa conferir por conta própria xD 
