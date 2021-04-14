console.log("Hola, soy nuevo en TypeScript");

function add(a: number, b:number){
    return a+b;
}

const sum = add(15,19);

console.log(sum);

//variables

let muted:boolean = true;
muted = false;
//muted = 'callado'; // nos muestra un error ya que lo declaramos como boolean

//números
let numerador:number = 42;
let denominador:number = 6;
let resultado = numerador/denominador;

//string
let nombre: string = 'Richard';
let saludo = `Hola soy ${nombre}`

//arreglos -> aquí pueden ser de muchos tipos de datos
let people: string[] = [];
people = ["Isabel", "Raul"];
people.push("Juan");

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("Juan");
peopleAndNumbers.push(10);

//enum -> enumera un conjunto de algo
enum color{
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
    Amarrillo = "Amarillo"
};

let colorFavorito: color = color.Amarrillo;
console.log(`Mi color favorito es ${colorFavorito}`);

//Any -> 
let comodin: any = 'Jokey';
comodin = {type: 'Wildcard'};

//Object
let someObject: object = {type: "Juan"};
console.log(someObject)


//Funciones
//funciones con retorno de un tipo especifico de variable
function add1(a: number, b:number): number{
    return a+b;
}

const sum1 = add(4,6);

console.log(sum1);

//funciones que retorna una función
function createAdder(a: number): (number) => number{
    return function (b: number){
        return b+a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6)

console.log(fourPlus6);

//con parametros opcionales y predeterminados
//todas las funciones q tienen un parametro asignado, es obligatorio enviarlo salvo se le
//indica que pueden ser opcional. Si no se le pasa los parametros, muestra un error
function fullName(fistName: string, lastName: string): string{
    return `${fistName} ${lastName}`
}

const juan = fullName("Juan", "Vilchez");

console.log(juan);


//para que el parametro sea opcional, se le asigna '?' antes de ':'
//nos mostrara el valor 'undefined
function fullName1(fistName: string, lastName?: string): string{
    return `${fistName} ${lastName}`
}

const juan1 = fullName1("Juan");

console.log(juan1);

//para que el parametro tenga un valor por defecto se le asigna
function fullName2(fistName: string, lastName: string = 'Vilchez'): string{
    return `${fistName} ${lastName}`
}

const juan2 = fullName2("Juan");

console.log(juan2);


//Interfaces en typescript
//Una interface es un contrato sintactico que una entidad debe de cumplir. Una interface define la
//sintaxis a la cual una entidad debe de adherirse

enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul'
}

//declarando la interface Rectangulo
interface Rectangulo {
    ancho:number
    alto:number
    color: Color
}


//declarando una variable de tipo Rectangulo, se debe de declarar todas las variables o si no nos
//arrojara un error, caso contrario podemos declararla como opcional '?'
let rect: Rectangulo = {
    ancho:4,
    alto:6,
    color: Color.Rojo
}

function area(r:Rectangulo){
    return r.alto*r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

console.log(rect.toString());//nos devuelve dos objetos vacios

rect.toString = function(){
    return this.color? `un rectangulo de color ${this.color}`: `un rectangulo`
}

console.log(rect.toString());

