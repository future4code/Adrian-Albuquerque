### Exercicio 1

a) *O que são os* *round* *e* **salt**? Que valores são recomendados para o **round**? Que valor você usou? Por quê?

- Salt são uma sequencia de caracteres aleatórias que são adicionadas junto das senhas, fazendo com que mesmo o valor da senha seja o mesmo o hash será unico. o Rouns são o custo da criptografia, quanto maior o número mais seguro serão os hashs, porém, a demanda de processamento será mais alta. Por padrão utilizamos 12 na maioria das libs.

b)  *Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por* *criptografar* *uma string usando o bcryptjs.*

- ```typescript
  import * as bcrypt from "bcryptjs";
  
  export class HashManager {
    async hash(textToHide: string) {
      const cost = 12;
      const salt = await bcrypt.genSalt(cost);
      const cypherText = await bcrypt.hash(textToHide, salt);
      return cypherText;
    }
  
    async compare(plainText: string, hash: string): Promise<boolean> {
      const hashCompare: boolean = await bcrypt.compare(plainText, hash);
      return hashCompare;
    }
  }
  ```

c) *Agora, crie a função que verifique se uma string é correspondente a um hash, use a função* *compare* *do bcryptjs*

- Resposta acima

### Exercicio 2

a)  *Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique*

- 

b)

- 

c) 

- 

d)

- 

### Exercicio 3

### Exercicio 4

### 