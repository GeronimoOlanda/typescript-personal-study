export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  static falaOi(): void {
    console.log('OI');
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, 0, '000-000-0');
  }
}

const pessoa1 = new Pessoa('Gerono', 'Olan', 23, '000.000.000-00');
const pessoa2 = Pessoa.criaPessoa('Geronimo', 'Olanda');

console.log(pessoa1);
console.log(pessoa2);
