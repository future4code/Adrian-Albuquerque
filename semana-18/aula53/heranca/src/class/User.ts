import Place from "./Place";

class User extends Place {
  private id: string;
  private email: string;
  private name: string;
  private password: string;
  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    cep: string
  ) {
    super(cep);
    console.log("Chamando construtor da classe User");
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
  }

  public introduceYourself() {
    return `Olá, ${this.name}`;
  }

  public getId(): string {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public getName(): string {
    return this.name;
  }
}

export default User;
