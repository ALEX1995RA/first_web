var varglobal= 'Var = poco se usa';
let varvariable = 'Let = Se usan pra variables que pueden tomar cualquier valor';
const varContante = 'Const = Se usa para valores constantes';

console.log(varglobal)
console.log(varvariable)
console.log(varContante)

function sumar(a,b){
    return a+b;
}
console.log(sumar(25,17));

const persona = {
    nombre:'Pepito Perez',
    edad: 25,
    profesion: 'Desarrollador',
    identificacion: '123456',
   
    saludos: function(){
        return `Hola me llamo ${this.nombre}`;

    }
};

console.log(persona.profesion);
console.log(persona.saludos());


const personas = new Object()
personas.nombre = 'Paula';
personas.edad = 25;
personas.profesion ='Arquitecto'
personas.id = '12345'
personas.saludar = function(){
    return `Hola me llamo ${this.nombre} y tengo ${this.edad} annios`
}

console.log(personas.saludar());


function perso(nombre, edad, profesion, id){
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
    this.id = id;

    this.saludar = function()
    {
        return `Hola, como estas, me llamo ${this.nombre} y soy ${this.profesion}`;
    }
}

const persona1 = new perso('Diana',25,'Ingenieria',12345);
console.log(persona1.saludar())

const persona2 ={
    nombre: 'Pepito Perez',
    saludar: () => console.log(`Hola, me llamo ${persona2.nombre}`),
};
persona2.saludar();