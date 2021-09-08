// setando o tipo da variavel fica mais facil chama-las em outros locais, aumentando a produtividade
// type Alias
type Idade = number;

type Pessoa1 = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
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

console.log(setCorPreferida(pessoa, 'Azul'));
