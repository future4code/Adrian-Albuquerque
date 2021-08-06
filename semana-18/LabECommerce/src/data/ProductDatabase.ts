import Product from "../entities/Product";
import BaseDatabase from "./BaseDatabase";

class ProductDatabase extends BaseDatabase {
  constructor() {
    super();
  }

  public static createProduct = async (newProduct: Product): Promise<void> => {
    await BaseDatabase.connection("labcommerce_product").insert(newProduct);
  };

  public static getProducts = async():Promise <Product[]> => {
    return await BaseDatabase.connection("labcommerce_product")
  }
}

export default ProductDatabase;
