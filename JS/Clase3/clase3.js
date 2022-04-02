/*Una función en un conjunto de instrucciones que se agrupan para realizar una tarea concreta, que luego se pueden reutilizar a lo largo de difrenetes instancias del código

function name_function(arguments)*/

function saludar(){
    alert("Hola, cómo estás?");
}

saludar();

/*ARRAYS -> colección de elementos del mismo o de distinto tipo*/

/*EJERCICIOS*/

//-Crear un array con los números del 1 al 10.
let num1a10=[1,2,3,4,5,6,7,8,9,10];

//-Crear un bucle for que imprima en consola todos los números del array.
for(let i = 0; i<10; i++){
    console.log(num1a10[i]);
}

//-Crear un bucle que imprima solo los primeros 5 números.
while(i<5){
    console.log(num1a10[i]);
    i++;
}

for(let i = 0; i < 5; i++){
    console.log(num1a10[i]);
}

do{
    console.log(num1a10[i]);
    i++;
}while(i<5);

//-Crear un bucle que imprima los últimos 5 números.
for(let i = 0; i < 10; i++){
    if(i>= 5){
        console.log(num1a10[i]);
    }
}

//-Crear un bucle que imprima todos los números, excepto el que este en la 4ta posición.

for(let i = 0; i < 10; i++){
    if(i!=3){console.log(num1a10[i])};
}