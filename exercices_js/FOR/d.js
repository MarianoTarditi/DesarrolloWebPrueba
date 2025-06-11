// d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con
// el número de la repetición, es decir que al final de la ejecución del bucle for
// debería haber 10 elementos dentro del array, desde el número 0 hasta al número
// 9. Mostrar por la consola del navegador el array final (utilizar console.log).

let array = [];

for(let i=0; i < 10; i++)
{
    array[i] = i+1;
}

console.log(array)