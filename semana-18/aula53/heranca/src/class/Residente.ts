import Place from "./Place";

class Residence extends Place {
  constructor(
    private dwellersQuantity: number,

    cep: string
  ) {
    super(cep);
  }

  public getDwellersQuantity(): number {
    return this.dwellersQuantity;
  }
}

export default Residence;
