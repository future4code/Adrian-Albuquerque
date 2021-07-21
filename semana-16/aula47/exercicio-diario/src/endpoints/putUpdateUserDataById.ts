import { Request, Response } from "express";
import connection from "../connection";

const putUpdateUserDataById = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400;
    try {
        const salary = Number(req.query.salary);
        const id = Number(req.params.id);
        if(!salary || !id || isNaN(salary) || isNaN(id)) {
            errorCode = 422
            throw new Error("Invalid Querry")
        }



    }
    catch(error) {
      if(error instanceof Error) {
        res.status(errorCode).send({message: error.message})
      }
    }
}
export default putUpdateUserDataById;