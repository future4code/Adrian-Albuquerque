import Place from "./Place";

class Commerce extends Place {
  constructor(protected floorsQuantity: number, cep: string) {
    super(cep);
  }
  getFloorsQuantity(): number {
    return this.floorsQuantity;
  }
}

export default Commerce;
