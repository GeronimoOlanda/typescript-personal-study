// strings
type Casa = {
  material: string;
  modelo?: string;
  planta: string;
  tipoDeFundacao: string;
  tipoDeImpermeabilizante: string;
};

// numbers
type FundacaoCasa = {
  quantidadeMateriais: number;
  altura: number;
  base: number;
  quantidadeSacosCimento?: number;
};

//boolean
type ComodosDaCasa = {
  quarto: true;
  cozinha: true;
  jardim: true;
  piscina?: false;
};

// array
const familia: Array<string> = ['Manuel', 'Marcos', 'Mauricio', 'Clementino'];
const valores: Array<number> = [5, 234, 100, 100];

// objetos
const Elementos: {
  nome: string;
  sobrenome: string;
  idade: number;
  peso: number;
  altura: number;
} = {
  nome: 'Geronimo',
  sobrenome: 'Olanda',
  idade: 2,
  peso: 85,
  altura: 1.76,
};

// funcoes
const familias = (
  painho: string,
  mainha: string,
  brodi: string,
  ages: Array<number>,
) => {
  console.log(painho);
  console.log(mainha);
  console.log(brodi);
  console.log(ages);
};

const fal = familias('Geronimo', 'Mari', 'Carl', [23, 55, 56]);

console.log(fal);

//classes
export class Pessoas {
  public pessoa: string;
  public humanos: number;
  public outrasPessoas: Array<string>;

  constructor(
    public nome: string,
    public idade: number,
    public others: Array<string>,
  ) {
    this.pessoa = nome;
    this.humanos = idade;
    this.outrasPessoas = others;
  }

  Pessoas(addPessoas: string) {
    return this.outrasPessoas.push(addPessoas);
  }
}

const pessoa = new Pessoas('Filhos de Deus', 800, ['eu', 'voce', 'nos', 'vos']);
console.log(pessoa);
