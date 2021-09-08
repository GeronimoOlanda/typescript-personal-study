/* eslint-disable */

let nome: string = 'Geronimo'; //qualquer tipo string: '' "" ``
let idade: number = 30; // qualquer tipo numerico
let adulto: boolean = true; //qualquer tipo booleano (true, false)
let simbolo:symbol = Symbol('qualquer-simbolo'); //qualquer valor symbol
// let big: bigint = 10n; //qualquer valor bigint


// Arrays
// primeira forma de declarar arrays com tipagem
let arrayDeNumeros: Array<number> = [1, 2, 3, 4];
let arratDeString:  Array<string> = ['Geronimo', 'Thalia', 'Mamae', 'Papai'];

// segunda forma de declarar arrays com tipagem
let aleatorio: string[] = ['dasdas','321312'];
console.log(nome);


//Objetos
let pessoa: {nome:string, idade:number, adulto?:boolean } = {
  nome: 'Geronimo Olanda',
  idade: 21,
  adulto: true,
}

console.log(pessoa.nome);

let elements: {peoples: string, population: number, validation: boolean} = {
  peoples: 'Brazillians',
  population: 230000,
  validation: true
}
console.log(elements);
//funcoes
function soma(name:string, x: number, y:number){
  let soma = x + y;
  return `Olá ${name}, a soma dos valores é ${soma}`;
}
const result = soma('Geronimo',119,20);
console.log(result);


