import { AuthenticationData } from "../types";
import * as jwt from "jsonwebtoken";

const expiresIn = "24h";

export class Authenticator {
  generateToken(info: string): string {
    const token = jwt.sign(
      {
        info,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn,
      }
    );

    return token;
  }

  getTokenData(token: string) {
    console.log(token)
    const { JWT_KEY } = process.env;
    console.log(JWT_KEY)
    const payload = jwt.verify(token, JWT_KEY as string) as any;
    const result = {
      id: payload.id
    };
    return result;
  }
}
