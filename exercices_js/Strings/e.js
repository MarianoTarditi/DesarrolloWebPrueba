// Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

let palabra = "ad ministrar";

if (palabra.length >= 10) {
  let posicionEspacio = palabra.indexOf(" ")

  console.log(posicionEspacio);
}
