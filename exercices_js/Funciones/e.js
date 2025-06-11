// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla
// dentro de la función suma probando que todo siga funcionando igual.

function Suma(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    return a + b;
  } else {
    ValidacionEntero(a, b)
  }
}

function ValidacionEntero(a, b) {
  if (!Number.isInteger(a)) {
    console.log(`El número ${a} no es entero.`);
    a = Math.round(a);
  }

  if (!Number.isInteger(b)) {
    console.log(`El número ${b} no es entero.`);
    b = Math.round(b);
  }
}

var resultado = Suma(5.2, 6.5);
console.log(resultado);
