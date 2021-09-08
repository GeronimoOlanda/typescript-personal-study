type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

// o & comergial representa AND que é a uniao de elementos
// no exemplo abaixo pessoa2 tem que ter nome e sobrenome e idade
type Pessoa2 = TemNome & TemSobrenome & TemIdade;

const pessoa: Pessoa2 = {
  nome: 'GG',
  sobrenome: 'Olanda',
  idade: 20,
};

console.log(pessoa);
// Module mode
export { pessoa };
