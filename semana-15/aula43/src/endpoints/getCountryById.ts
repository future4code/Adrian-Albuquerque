import { Request, Response } from "express";
import { countries } from "../data";
import { country } from "../types";

export const getCountryById = (req: Request, res: Response): void => {
  const result: country | undefined = countries.find(
    (country) => country.id === Number(req.params.id)
  );

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send("Not found");
  }
};
