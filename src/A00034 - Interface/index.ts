interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

type tipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;

interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}
// sempre que for usar um tipo e nao uma classe, usa-se a palavra reservada( implements )
export class Pessoa implements tipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + this.sobrenome;
  }
}

const pessoa = new Pessoa('Geronimo', 'Olanda');
console.log(pessoa.nomeCompleto());
