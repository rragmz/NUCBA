/*
Crear un array con, al menos, 10 ingredientes para hacer pizzas 🍕 (puede ser tanto masa como los ingredientes que van sobre la base).

👉 Crear una función que acepte ese array como parámetro. 

Dentro de la función, debemos lograr lo siguiente: 
👉 Iterar ese array para lograr que, los ingredientes que tengan una cantidad par de letras, vayan a un array llamado "pares". 
👉 Hacer lo mismo con los impares, enviándolos al array "impares". 
👉 Imprimir en consola:  "Los ingredientes pares son: (ingredientes en array pares). 
Los ingredientes impares son: (ingredientes en array impares)."*/

let ingredientes = ["masa", "salsa", "queso", "oregano", "cebolla", "ajo", "morrón", "provolone", "tomate", "jamón"];

function contarLetras(array){
    let pares = [];
    let impares = [];

    for(let i = 0; i < array.length; i++){
        if(array[i].length %2==0){
            pares.push(array[i]);
        }
        else{
            impares.push(array[i]);
        }
    }

    return(console.log(`Los ingredientes pares son: ${pares} y los impares son: ${impares}`));
}

contarLetras(ingredientes);