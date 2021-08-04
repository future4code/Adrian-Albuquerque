import Client from "./Client";
import Commerce from "./Commerce";

class CommercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    public floorsQuantity: number,
    protected cep: string
  ) {
    super(floorsQuantity, cep);
  }
  public calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }
  public getCpnj(): string {
    return this.cnpj;
  }
}

export default CommercialClient;
