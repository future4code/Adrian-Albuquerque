class Purchase {
  public id: string;
  public quantidItem: number;
  public totalValue: number;
  constructor(id: string, quantidItem: number, totalValue: number) {
    this.id = id;
    this.quantidItem = quantidItem;
    this.totalValue = totalValue;
  }
}

export default Purchase;
