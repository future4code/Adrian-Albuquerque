import { Request, Response } from "express";
import ProductDatabase from "../data/ProductDatabase";
import { HttpStatus } from "../entities/Error";

const getProducts = async (req: Request, res: Response): Promise<void> => {
  let errorCode = HttpStatus.FORBIDDEN;
  try {
    const result = await ProductDatabase.getProducts();
    res.status(HttpStatus.OK).send(result);
  } catch (err) {
    if (err instanceof Error) {
      res.status(errorCode).send({ message: err.message });
    }
  }
};

export default getProducts;
