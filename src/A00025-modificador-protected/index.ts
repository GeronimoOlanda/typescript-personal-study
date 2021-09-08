export class Empresa {
  readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionarColaboradores(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }

  getNome(): string {
    return this.nome;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

export class udemy extends Empresa {
  constructor() {
    super('Geronimo', '42.302.0001/01');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

const empresa1 = new udemy();

const colaboradores1 = new Colaborador('Gerimo', 'Olda');
const colaboradores2 = new Colaborador('Thia', 'Apareda');
const colaboradores3 = new Colaborador('Jé', 'Gerimo');
const colaboradores4 = new Colaborador('Mines', 'Batta');

empresa1.adicionarColaboradores(colaboradores1);
empresa1.adicionarColaboradores(colaboradores2);
empresa1.adicionarColaboradores(colaboradores3);
empresa1.adicionarColaboradores(colaboradores4);
const colaboradorRemovido = empresa1.popColaborador();

console.log(empresa1);
console.log(colaboradorRemovido);
