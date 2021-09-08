export class Empresa {
  readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

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

const empresa1 = new Empresa('Gerimo', '14.222.2./1-22');

const colaboradores1 = new Colaborador('Genimo', 'Olda');
const colaboradores2 = new Colaborador('Thlia', 'Apacida');
const colaboradores3 = new Colaborador('Jé', 'Geroo');
const colaboradores4 = new Colaborador('Manes', 'Basta');

empresa1.adicionarColaboradores(colaboradores1);
empresa1.adicionarColaboradores(colaboradores2);
empresa1.adicionarColaboradores(colaboradores3);
empresa1.adicionarColaboradores(colaboradores4);

console.log(empresa1);
