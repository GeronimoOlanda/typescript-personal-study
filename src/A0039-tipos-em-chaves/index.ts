type Veiculo = {
  marca: string;
  ano: number;
};

type Car = {
  brand: Veiculo['marca']; // estamos pegando o tipo de veiculo que é a marca, e esta tipada como string
  year: Veiculo['ano'];
  name: string;
};

type Family = {
  name: string;
  lastName: string;
  totalElements: number;
  newInformations: Array<string>;
};
const carro: Car = {
  brand: 'Ford',
  year: 2019,
  name: 'Diferenciado',
};

console.log(carro);

const familia: Family = {
  name: 'Thalia',
  lastName: 'Aparecida',
  totalElements: 21,
  newInformations: ['Maria', 'José', 'Parents'],
};

for (const family in familia) {
  console.log(`${family} = ${familia[family]}`);
}
