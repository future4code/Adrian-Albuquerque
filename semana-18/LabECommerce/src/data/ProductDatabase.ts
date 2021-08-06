import Product from "../entities/Product";
import BaseDatabase from "./BaseDatabase";

class ProductDatabase extends BaseDatabase {
  constructor() {
    super();
  }

  public static createProduct = async (newProduct: Product): Promise<void> => {
    await BaseDatabase.connection("labcommerce_product").insert(newProduct);
  };

  public static getProducts = async (
    id: string | undefined
  ): Promise<Product[]> => {
    if (id) {
      return await BaseDatabase.connection.raw(`
      SELECT * FROM labcommerce_product WHERE id = ${id}
      `)
    } else {
      return await BaseDatabase.connection("labcommerce_product");
    }
  };
}

export default ProductDatabase;
