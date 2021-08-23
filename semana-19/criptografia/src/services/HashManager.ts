import * as bcrypt from "bcryptjs";

export class HashManager {
  async hash(textToHide: string) {
    const cost = 12;
    const salt = await bcrypt.genSalt(cost);
    const cypherText = await bcrypt.hash(textToHide, salt);
    return cypherText;
  }

  async compare(plainText: string, hash: string): Promise<boolean> {
    const hashCompare: boolean = await bcrypt.compare(plainText, hash);
    return hashCompare;
  }
}
