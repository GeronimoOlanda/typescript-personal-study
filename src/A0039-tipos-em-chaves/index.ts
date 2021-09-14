type Veiculo = {
  marca: string;
  ano: string;
};

type Car = {
  brand: Veiculo['marca']; // estamos pegando o tipo de veiculo que é a marca, e esta tipada como string
  year: Veiculo['ano'];
  name: string;
};

const carro: Car = {
  brand: 'Ford',
  year: '2019',
  name: 'Diferenciado',
};

console.log(carro);
