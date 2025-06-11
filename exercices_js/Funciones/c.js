// c. Crear una función validate integer que reciba un número como parámetro y
// devuelva verdadero si es un número entero.

function validateInteger(num) {
  return Number.isInteger(num);
}

console.log(validateInteger(5));     
console.log(validateInteger(5.2));   
console.log(validateInteger("5"));  