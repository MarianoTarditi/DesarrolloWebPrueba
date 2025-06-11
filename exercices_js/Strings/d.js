// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con la primera letra en mayúscula y las demás en minúscula. Guardar el
// resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

let palabra = "administrar";

if (palabra.length >= 10) {
  let primeraLetra = palabra.substring(0, 1).toUpperCase();
  let resto = palabra.substring(1).toLocaleLowerCase();
  let palabraFormateada = primeraLetra + resto;

  console.log(palabraFormateada);
}
