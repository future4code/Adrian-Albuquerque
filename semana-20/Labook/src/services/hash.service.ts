import * as bcryptjs from "bcryptjs";

export class HashManager {
  async hash(password: string): Promise<string> {
    const rounds = 12;
    const salt = await bcryptjs.genSalt(rounds);
    return await bcryptjs.hash(password, salt);
  }
  compare = async (text: string, hash: string): Promise<boolean> => {
    return bcryptjs.compare(text, hash);
  };
}