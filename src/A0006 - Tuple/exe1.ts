const dadosCliente1: [number, string] = [1, 'Geronimo'];
const dadosCliente2: [number, string, string?] = [1, 'Geronimo', 'Thalia'];
const dadosFUncionarios: [string, string, string] = [
  'Maria',
  'Recursos Humanos',
  'Codigo 3211',
];
dadosCliente1[0] = 23;
dadosCliente1[1] = 'Thalia e Geronimo Casados para sempre, amém!';

console.log(dadosCliente1);
console.log(dadosCliente2);

//readonly
const array1: readonly string[] = ['Geronimo', 'Thalia'];
const array2: readonly number[] = [1, 2];
console.log(array1);
console.log(array2);
