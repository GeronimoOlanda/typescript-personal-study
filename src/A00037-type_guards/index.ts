function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 2));
console.log(add('gg', '22'));

type Pessoa = { nome: string };
type Animal = { cor: string };

export class Aluno implements Pessoa {
  constructor(public nome: string) {}
}
