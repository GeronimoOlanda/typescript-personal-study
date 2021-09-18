// setando o tipo da variavel fica mais facil chama-las em outros locais, aumentando a produtividade
// type Alias
type Idade = number;

type Pessoa1 = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};
type Carro1 = {
  nome: string;
  modelo: string;
  marca: string;
};
type CorRGB = 'Vermelha' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magento' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa1 = {
  nome: 'Geronimo',
  idade: 23,
  salario: 2332,
  corPreferida: 'Vermelha',
};

export function setCorPreferida(pessoa: Pessoa1, cor: CorPreferida): Pessoa1 {
  return { ...pessoa, corPreferida: cor };
}

export function setCarro(carro: Carro1): Carro1 {
  return { ...carro };
}
console.log(setCorPreferida(pessoa, 'Azul'));
