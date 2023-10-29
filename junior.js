//Crie uma função que receba uma string e retorne a mesma string, mas com todas as letras em maiúsculas.
const letraMaiusc = (str) => {
  return str.toUpperCase();
};

let str = "frank";
console.log(letraMaiusc(str));

//Escreva uma função que recebe duas strings como argumento e concatena-as em uma única string com um espaço entre elas.
function concatenaStrings(str1, str2) {
  return str1 + str2;
}

let str1 = "Frank ";
let str2 = "Willian";
console.log(concatenaStrings(str1, str2));

//Crie uma função que recebe uma string como argumento e retorna o número de caracteres nessa string.
const numeroCaract = (str3) => {
  return str3.length;
};

let str3 = "Minha String";
console.log(numeroCaract(str3));

//Crie uma função que receba uma palavra, e uma frase. Você deve verificar se existe esta palavra nesta frase e retornar true ou false.
const palavraFrase = (keyword, frase) => {
  if(frase.indexOf(keyword) !== -1){
    return true;
  }else{
    return false;
  }
};

let keyword = "Roma";
let frase = "O rato roeu a roupa do Rei de Roma";
console.log(palavraFrase(keyword, frase));

//Escreva uma função que recebe um array de números como argumento e retorna a soma de todos os números no array.
function somaArray(arrayDeNumeros) {
  let soma = 0;

  for (let i = 0; i < arrayDeNumeros.length; i++) {
    soma += arrayDeNumeros[i];
  }

  return soma;
}

let numeros = [1, 2, 3, 4, 5];
console.log(somaArray(numeros));

//Você receberá uma lista com nomes de usuarios, verifique se um usuario existe neste array e retorne true ou false.
const verificaUsuarios = (strArr, user) => {
  if(strArr.indexOf(user) !== -1){
    return true;
  }else{
    return false;
  }
};

let arrayUser = ['Frank', 'Lucas', 'Marcos'];
let user = 'Mateus';
console.log(verificaUsuarios(arrayUser, user));

//Escreva uma função que recebe dois números como argumento e retorna a soma deles.
const somaNumero = (num1, num2) => {
  return num1+num2;
};

let num1 = 5;
let num2 = 3;
console.log(somaNumero(num1, num2));

//Crie uma função que recebe um número como argumento e verifica se ele é par ou ímpar retornando  a string "par" ou "impar"
const verificarNumero = (num) => {
  if(num % 2 == 0){
    return "Par";
  }else{
    return "Ímpar";
  }
};

let num = 9;
console.log(verificarNumero(num));

module.exports = {
  toUpperCase,
  concatStrings,
  numberString,
  existKeyword,
  sumAllItemsInArray,
  verifyUserInArray,
  sumNumber,
  verifyNumberIsPairOrOdd,
};
