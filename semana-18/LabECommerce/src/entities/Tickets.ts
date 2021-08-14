import Product from "./Product";

class Tickets extends Product {
  constructor(
    public productId: string,
    public name: string,
    public description: string,
    price: number,
    origin: string,
    destiny: string,
    id: string
  ) {
    super(id, name, description, price);
  }

  
}

export default Tickets;
