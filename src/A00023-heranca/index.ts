export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCOmpleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {}
export class Cliente extends Pessoa {}

const aluno = new Aluno('Geronimo', 'José', 32, 'd31231.3132');
const cliente = new Cliente('Geronimo', 'José', 32, 'd31231.3132');
const pessoa = new Pessoa('Geronimo', 'José', 32, 'd31231.3132');

console.log(`Idade: ${aluno.getIdade()}`);
console.log(`Nome Completo: ${cliente.getNomeCOmpleto()}`);
console.log(`Nome: ${pessoa.nome}`);
