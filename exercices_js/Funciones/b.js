// b. A la función suma anterior, agregarle una validación para controlar si alguno de
// los parámetros no es un número, mostrar una alerta aclarando que uno de los
// parámetros tiene error y retornar el valor NaN como resultado.

function Suma(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    console.log('Los parámetros deben ser números');
    return NaN;
  }
}

var resultado = Suma(5, 6);
console.log(resultado);
