import { app } from "./app";
import Client from "./class/Client";
import Customer from "./class/Customer";
import User from "./class/User";

const bananinha = new User(
  "1",
  "bananinha@labenu.com",
  "bananinha",
  "paiva124",
  "9349493"
);

const joaoEspalhaLixo = new Customer(
  "1",
  "Joao Espalha Lixo",
  "espalha-lixo@joao.com",
  "lixo1234",
  "12345610"
);

const client: Client = {
  name: "Goli",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => {
    return 2;
  },
};

// const place = new Place()

console.log(joaoEspalhaLixo.introduceYourself());
// console.log(bananinha.getEmail()); // Retornou o email do usuário e o chamado no contrutor.
console.log(client);
