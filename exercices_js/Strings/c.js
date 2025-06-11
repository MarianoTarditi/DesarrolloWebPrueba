// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
//string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

let palabra = "Administrar";

if (palabra.length >= 10) {
  var nuevaVariable = palabra.substring(7, 10);
  console.log(nuevaVariable);
}
