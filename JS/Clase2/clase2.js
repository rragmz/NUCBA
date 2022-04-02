//Hoisting: Fue pensado como una manera general de referirse a cómo funcionan los contextos d ejecución en JavaScript (específicamente las fases de creación y ejecución)
//Las declaraciones de variables y funciones son ASIIGNADAS EN MEMORIA durante la fase de compilación, por lo que se leen como si fuera movidas al principio del código

let edad = 23;
console.log(`Hola, tengo ${edad} años`);

/*SCOPE: Es el contexto actual de ejecución. El contexto en el que losvalores y las expresiones son "visibles" o pueden ser referenciados*/