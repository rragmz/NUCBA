//OBJETO -> Creemos que no va a mutar (cambiar de tipo de dato). Está formado por propiedades que se definen como {key:value}. Puede contener todo tipo de dato menos vacío.

const perro = {
    nombre: "Nicolás",
    edad: 23,
    esAlto: false,
    vehiculos: [],
    direccion: {
        //
    }
};

const perro2 = {
    nombre: "Nicolás",
    edad: 23,
    esAlto: false,
    vehiculos: [],
    direccion: {
        //
    }
};

//Va a dar falso porque no existen dos objetos iguales.
console.log(perro===perro2);

let propiedad = 'edad';

const props = ['nombre', 'edad', 'esAlto', 'vehiculos', 'direccion'];

//ACCEDER A LAS PROPIEDADES DE UN OBJETO
/*Cuándo corchete y cuándo punto?
Punto-> cuando sabemos LITERALMENTE la propiedad que queremos usar
Corchete -> cuando la propiedad puede ser dinámica*/

//Operador punto
console.log(perro.nombre); //Devuelve el nombre

//Operador corchete + ' '
console.log(perro['nombre']);

for(let i = 0; i < props.length; i++){
    console.log(perro[props[i]]);
}