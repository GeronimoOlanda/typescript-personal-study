export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf() {
    return this._cpf;
  }
}

const pessoa = new Pessoa('Gerono', 'Olda', 23, '000.000.000-00');
const exibeCpf = (pessoa.cpf = '22223.222.31-11');

console.log(exibeCpf);
