import { Request, Response } from "express";
import axios from "axios";
import { addressInfo } from "../types";

const getAddressInfo = async (zipcode: string): Promise<addressInfo | any> => {
  let errorCode = 400;
  console.log(zipcode);
  try {
    const result = await axios.get(`viacep.com.br/ws/${zipcode}/json/`);
    console.log(result);
    const { street, neigthborhood, city, state } = result.data;

    return { street, neigthborhood, city, state };
  } catch (error: any) {
    console.log(error.response ? error.response.data : error.message);
  }
};

export default getAddressInfo;

getAddressInfo("54335090").then(console.log).catch(console.log);
