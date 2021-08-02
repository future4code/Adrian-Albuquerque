import app from "./app";
import createCharacter from "./endpoints/createCharacter";
import deleteCharacter from "./endpoints/deleteCharacter";
import getAllCharacters from "./endpoints/getAllCharacters";
import getCharacterById from "./endpoints/getCharacterById";

app.get("/character", getAllCharacters);
app.put("/character", createCharacter);
app.delete("/character/:id", deleteCharacter);
app.get("/character/:id", getCharacterById);

// app.get("/movie/:id/characters")

// app.get("/movies")
// app.delete("/movies")

type transaction = {
  description: string;
  value: number;
  date: string;
};

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }
}

class Transaction {
  private description: string;
  private value: number;
  private date: string;

  public setDate = (date: string) => {
    return (this.date = date);
  };

  public getDate = () => {
    return this.date;
  };

  public setValue = (value: number) => {
    return (this.value = value);
  };

  public getValue = () => {
    return this.value;
  };

  public setDescription = (description: string) => {
    return (this.description = description);
  };

  public getDescription = () => {
    return this.description;
  };

  constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description;
  }
}

class Bank {
  private accounts: UserAccount[];

  setAccounts = (accounts: UserAccount[]) => {
    return (this.accounts = accounts);
  };
  getAccounts = () => {
    return this.accounts;
  };

  constructor(accounts: any) {
    this.accounts = accounts;
  }
}

const userAccount = new UserAccount("443294923", "aaaaaaa", 20);
console.log(userAccount);

const transaction = new Transaction("fsfd", 14, "sdsds");

const bank = new Bank(userAccount);

console.log(bank);

const aaa = bank.getAccounts();

console.log(aaa);
