// d . A la función suma del ejercicio 6b) agregarle una llamada que valide que los
// números sean enteros. En caso que haya decimales mostrar un alerta con el
// error y retorna el número convertido a entero (redondeado).

function Suma(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) 
  {
    return a + b;
  } 
  else 
  {
    if (!Number.isInteger(a)) 
    {
      console.log(`El número ${a} no es entero.`);
      a = Math.round(a);
    }

    if (!Number.isInteger(b)) 
    {
      console.log(`El número ${b} no es entero.`);
      b = Math.round(b);
    }
  }
}

var resultado = Suma(5, 6);
console.log(resultado);
