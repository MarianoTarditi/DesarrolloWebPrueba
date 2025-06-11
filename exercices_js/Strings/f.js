// Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
// algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
// generar un nuevo string que tenga la primera letra de ambas palabras en
// mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
// toUpperCase, toLowerCase y el operador +)

let frase = "administrar empresa";

// Encontrar la posición del espacio
let posicionEspacio = frase.indexOf(" ");

let primeraPalabra = frase.substring(0, posicionEspacio);
let primeraPalabraFormateada = primeraPalabra.substring(0,1).toUpperCase() + primeraPalabra.substring(1).toLowerCase();

let segundaPalabra = frase.substring(posicionEspacio + 1);
let segundaPalabraFormateada = segundaPalabra.substring(0,1).toUpperCase() + segundaPalabra.substring(1).toLowerCase();

let resultado = primeraPalabraFormateada + " " + segundaPalabraFormateada;

console.log(resultado);  
