import { validateCharacter } from "../src/services/validateCharacter";

describe("testar validações de personagem", () => {
  test("retorna false se o nome for  vazio", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });
    expect(result).toBe(false);
  });

  test("retorna false se a vida for 0", () => {
    const result = validateCharacter({
      name: "bananinha",
      life: 0,
      strength: 300,
      defense: 500,
    });
    expect(result).toBe(false);
  });

  test("retorna false quando a força for 0", () => {
    const result = validateCharacter({
      name: "bananinha",
      life: 1500,
      strength: 0,
      defense: 500,
    });
    expect(result).toBe(false);
  });

  test("retorna false quando a defesa for 0", () => {
    const result = validateCharacter({
      name: "bananinha",
      life: 1500,
      strength: 300,
      defense: 0,
    });
    expect(result).toBe(false);
  });

  test("retorna true quando as informacoes foram certas", () => {
    const result = validateCharacter({
      name: "bananinha",
      life: 1500,
      strength: 300,
      defense: 200,
    });
    expect(result).toBe(true);
  });
});
