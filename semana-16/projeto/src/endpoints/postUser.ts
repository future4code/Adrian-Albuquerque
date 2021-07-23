import { Request, Response } from "express";

const postUser = async(req: Request, res: Response): Promise<void> => {
    let errorCode = 400;
    try {

    }
    catch(error) {
        if(error instanceof Error) {
            res.status(errorCode).send({message: error.message})
        }
    }
}
export default postUser