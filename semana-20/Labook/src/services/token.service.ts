import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export interface AuthenticationData {
  id: string;
}
export class Authenticator {
  public generate(input: AuthenticationData): string {
    const token = jwt.sign(input, "fkdgdf", {
      expiresIn: "24h",
    });
    return token;
  }

  public getTokenData(token: string): AuthenticationData {
    const data = jwt.verify(token, "fkdgdf");
    return data as AuthenticationData;
  }
}
