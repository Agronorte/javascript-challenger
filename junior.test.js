const {
  toUpperCase,
  concatStrings,
  numberString,
  existKeyword,
  sumAllItemsInArray,
  verifyUserInArray,
  sumNumber,
  checkIfNumberIsEvenOrOdd,
} = require("./junior");

describe("Suite de Testes para Funções de Manipulação e Verificação de Dados", () => {
  test("Transformar uma palavra em letras maiusculas", () => {
    expect(toUpperCase("agronorte")).toBe("AGRONORTE");
  });

  test("Concatenar duas strings", () => {
    expect(concatStrings("Agronorte", "Nutrição")).toBe("AgronorteNutrição");
  });

  test("Obter número de letras em uma palavra", () => {
    expect(numberString("Agronorte")).toBe(9);
  });

  test("Verificar se uma palavra existe em uma string", () => {
    expect(existKeyword("Bandeira", "Bandeira do Brasil")).toBe(true);
  });

  test("Somar todos os números de uma lista", () => {
    expect(sumAllItemsInArray([10, 10, 10])).toBe(30);
  });

  test("Verificar um item no array", () => {
    expect(verifyUserInArray(["Julio", "Kallew", "Vinicius"], "Julio")).toBe(
      true
    );
  });

  test("Somar dois números", () => {
    expect(sumNumber(5, 5)).toBe(10);
  });

  test("Vereficar par ou impar", () => {
    expect(checkIfNumberIsEvenOrOdd(5)).toBe("impar");
    expect(checkIfNumberIsEvenOrOdd(2)).toBe("par");
  });
});
