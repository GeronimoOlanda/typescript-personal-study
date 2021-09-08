export class Empresa {
  public readonly nome: string; // public nao necessario
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}
const nome = 'geronimo';

const empresa1 = new Empresa('Geronimo', '43.12001-11');

const colaborador1 = new Colaborador('Geronimo', 'José');
const colaborador2 = new Colaborador('Thal', 'Aparecida');
const colaborador3 = new Colaborador('Carlos', 'Edardo');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

console.log(empresa1);
empresa1.mostrarColaboradores();
