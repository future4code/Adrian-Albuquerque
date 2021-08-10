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

//   getTokenData(): AuthenticationData {

//   }
}
