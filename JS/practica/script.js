/*

 
-Realizar ambos ejercicios con funciones regulares y arrow functions. 
-El resultado debe ser de lectura friendly para el usuario ("El resultado de la suma es..."). 

let num1 = 6 
let num2 = 12 
*/
//-Crear una función que imprima en consola el resultado de la suma de num1 y num2. 
var num1 = 2;
var num2 = 3;

function suma(){
    return console.log(num1 + num2);
}

//-Crear una función que reciba dos números como parámetros e imprima en consola la suma de ambos números.

function sumaParam(a, b){
    if(isNaN(a) || isNaN(b)){
        return console.log("Error");
    }
    else{
        return console.log(a+b);
 
    }
}