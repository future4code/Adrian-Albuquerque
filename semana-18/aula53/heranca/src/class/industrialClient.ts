import Client from "./Client";
import Industry from "./Industry";

class IndustrialClients extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private industryNumber: string,
    public machinesQuantity: number,
    public cep: string
  ) {
    super(machinesQuantity, cep);
  }
  public getIndustryNumber(): string {
    return this.industryNumber;
  }
  public calculateBill(): number {
    return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
  }
}

export default IndustrialClients;
