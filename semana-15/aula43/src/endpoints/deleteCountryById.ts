import { Request, Response } from "express";
import { countries } from "../data";

export const deleteCountryById = (req: Request, res: Response): void => {
  const index = countries.findIndex(
    (country) => country.id === Number(req.params.id)
  );
  countries.splice(index, 1);
  console.log(index)
  res.status(204).send(index);
};