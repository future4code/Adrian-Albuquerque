export type User = {
  name: string;
  cpf: string;
  date: string;
  balance: number;
  statement: Statement;
};

export type Statement = [
  {
    value: number;
    date: string;
    description: string;
  }
];
