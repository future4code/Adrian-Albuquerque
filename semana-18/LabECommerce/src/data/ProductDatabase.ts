import Product from "../entities/Product";
import BaseDatabase from "./BaseDatabase";

class ProductDatabase extends BaseDatabase {
  constructor() {
    super();
  }

  public static createProduct = async (newProduct: Product): Promise<void> => {
    await BaseDatabase.connection("labcommerce_product").insert(newProduct);
  };

  public static getProducts = async (id: any): Promise<Product[]> => {
    if (id) {
      const result = await BaseDatabase.connection("labcommerce_product").where(
        { id }
      );

      return result[0];
    } else {
      return await BaseDatabase.connection("labcommerce_product");
    }
  };
}

export default ProductDatabase;
