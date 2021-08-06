import { Request, Response } from "express";
import ProductDatabase from "../data/ProductDatabase";
import { HttpStatus } from "../entities/Error";
import Product from "../entities/Product";

const postCreateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode = 400;
  try {
    const { name, description, price } = req.body;
    const id = Date.now().toString();

    if (!name || !description || !price) {
      errorCode = HttpStatus.FORBIDDEN;
      throw new Error("invalid body");
    }

    const newProduct = new Product(id, name, description, price);
    await ProductDatabase.createProduct(newProduct);
    res.status(HttpStatus.OK).send({ message: "Product created" });
  } catch (err) {
    if (err instanceof Error) {
      res.status(errorCode).send({ message: err.message });
    }
  }
};

export default postCreateProduct;
