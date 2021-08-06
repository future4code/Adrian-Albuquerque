import { connection } from "./connection";
const printError = (error: any) => {
  console.log(error.sqlMessage || error.message);
};
