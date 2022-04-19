/*
Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

🔥 Crear una iteración del array que imprima en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) Los nombres de todos las pizzas.
d) Los precios de las pizzas.
e) El nombre de cada pizza con su respectivo precio.

Cada respuesta debe ser, como siempre, usuario friendly. 
Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸
*/

class Pizza{
    constructor(ID, nombre, ingredientes, precio){
        this.ID = ID;
        this.nombre = nombre;
        this.ingredientes = [];
        this.precio = precio;
    }
}

const Fugazzeta = new Pizza(1, 'Fugazzeta', ['Muzzarella', 'Cebolla', 'Orégano'], 500);
const Muzzarella = new Pizza(2, 'Muzarella', ['Salsa de tomate', 'Muzzarella', 'Orégano'], 400);
const Napolitana = new Pizza(3, 'Napolitana', ['Salsa de tomate', 'Muzzarella', 'Tomate', 'Ajo', 'Orégano'], 700);
const JamonMorrones = new Pizza(4, 'Jamón y Morrones', ['Salsa de tomate', 'Muzzarella', 'Jamón', 'Morrón'], 800);
const Verdura = new Pizza(5, 'Verdura', ['Espinaca', 'Queso', 'Salsa blanca', 'Orégano'], 600);
const Calabresa = new Pizza(6, 'Calabresa', ['Salsa de tomate', 'Muzzarella', 'Salame'], 700);

const Pizzas = [];
Pizzas.push(Fugazzeta,Muzzarella,Napolitana,JamonMorrones,Verdura,Calabresa);

//A, pizzas con ID impar
const pizzasIDImpar = [];

//Obtengo las pizzas impares
for(pizza in Pizzas){
    if(Pizzas[pizza].ID % 2 !== 0){
        pizzasIDImpar.push(' ' + Pizzas[pizza].nombre);
    }
}

//Consologueo cuáles son las pizzas con id impar de manera user friendly
console.log(`Las pizzas con ID impar son: ${pizzasIDImpar}`);

//B. Pizza menor a $600
const pizzaBarata = [];

Pizzas.find(pizza => {
    if(pizza.precio < 600){
        pizzaBarata.push(' ' + pizza.nombre);
    }
});

if(pizzaBarata.length>0){
    console.log(`Las pizzas que cuestan menos de $600 son: ${pizzaBarata}`);
}
else{
    console.log(`No hay pizzas menores a $600`);
}

//C. los nombres de todas las pizzas
const nombresPizzas = []

Pizzas.forEach(pizza => {
    nombresPizzas.push(` ${pizza.nombre}`);
});

console.log(`Estas son las variedades de pizzas que tenemos: ${nombresPizzas}`);

//D. Los precios de las pizzas
const preciosPizzas = [];

Pizzas.forEach(pizza => {
    preciosPizzas.push(` $${pizza.precio}`);
});

console.log(`Los precios de las pizzas son: ${preciosPizzas}`);

//D el precio de cada pizza con su nombre
console.log('***** NUESTROS PRECIOS *****');
Pizzas.forEach(pizza =>{
    console.log(`La ${pizza.nombre} cuesta $${pizza.precio}`);
})
