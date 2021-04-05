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

