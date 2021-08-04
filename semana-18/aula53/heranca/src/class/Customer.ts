import User from "./User";

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;
  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password, "43439349");
    console.log("CHamando construtor da classe Customer");
    this.creditCard = creditCard;
  }
  public getCreditCard(): string {
    return this.creditCard;
  }
}

export default Customer;
