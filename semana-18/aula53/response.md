# Herança



#### Exercicio 1

a) *Seria possível imprimir a senha (**password**) atrelada a essa instância?*

- Não, a senha dessa clase é privada e somente ela pode ter acesso, além disso, não existe nenhum método Getter retornando-a.

b) *Quantas vezes a mensagem* *"Chamando o construtor da classe User"* *foi impressa no terminal?*

- Chamando qualquer um dos Getters, retorna a mensagem apenas uma única vez.

#### Exercicio 2

a)  *Quantas vezes a mensagem* *"Chamando o construtor da classe Customer"* *foi impressa no terminal?*

- Apenas uma vez, exibindo dados públicos da classe no console.

b) *Quantas vezes a mensagem* *"Chamando o construtor da classe User"* *foi impressa no terminal? Por quê?*

- Duas vezes, a primeira pro instanciar e a segunda por acessar os dados do User atraves do Customer

#### Exercicio 3

a) *Seria possível imprimir a senha (**password**) atrelada a essa instância?* *Por quê?*

- Não, a senha só pode ser acessada por dentro da classe por conta de ser private

#### Exercicio 4

-   public introduceYourself() {

  ​    return "Olá, bom dia !!!"

    }

#### Exercicio 5

-   public introduceYourself() {

  ​    return `Olá, ${this.name}`;

    }



# Polimorfismo



#### Exercicio 1

a) *Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?*

- Retornou todas as propriedades inseridas e a função calculateBill

#### Exercicio 2

a) *Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja:* *new Place(...)**). Qual foi o erro que o Typescript gerou?*

- Não é possivel instanciar uma classe abstrata

b) *Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?*

- com a palavra reservada extends conseguimos ter acesso aos dados da interface

#### Exercicio 3

a) *O que precisaríamos fazer para conseguir efetivamente criar uma instância da classe Place? (última pergunta do exercício anterior)*

- Por conta do polimorfismo, a classe filha herda as propriedades do tipo pai, uma instancia da Residence tambem é uma instancia da classe Place. A criação de uma instancia da classe abstrata é possivel quando declaramos uma classe filha e a instanciamos.

b) *Por que a* *Place* *não é uma interface?*

- Porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces.

c) *Por que a classe* *Place* *é uma Classe Abstrata?*

- Porque não enxergamos uma situação em que seria necessário criar uma instância dessa classe.

#### Exercicio 4

a) *Que métodos e propriedades essa classe possui? Por quê* ?

- Metodos herdados pela classe Residence e Clients

#### Exercicio 5

a) *Quais as semelhanças dessa classe com a* ResidentialClient?

- Ambas são filhos da classe Place e extendem a interface Client

b) *Quais as diferenças dessa classe com a* *ResidentialClient*  ?

- Metodos são diferentes mesmo as funções dessas classes serem semelhantes, o residentialClient há o cep enquanto a outra classe possui cnpj

#### Exercicio 6

a) *De* q*ual classe a* *IndustrialClient* *deve ser filha? Por quê?*

- o IndustrialClients necessitam do método getIndustryNumber herdado pelo pai Industry. Como IndustrialClients é independente de Industry é necessário herdar seus métodos.

b) *Que interface a* *IndustrialClient* *implementa? Por quê?*

- Como a classe IndustrialClient além de ser uma industria, ela é cliente e parte dos dados necessário está nessa interface

c) Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?

- Parte desses dados não podem ser alterados nas classes filhas.

