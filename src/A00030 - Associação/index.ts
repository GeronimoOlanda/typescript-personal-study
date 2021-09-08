export class Escritor {
  private _ferramenta: Ferramenta | null = null;
  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this.ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta == null) {
      console.log('Não posso escrever sem uma ferramenta nescessaria.');
      return;
    }

    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} esta escrevendo..`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} esta digitando..`);
  }
}

const escritor = new Escritor('Geronimo');
const caneta = new Caneta('Bic');
const maquinaescrever = new MaquinaEscrever('Maquina Bic Plus');

console.log('Nome = ' + escritor.nome);
console.log('Caneta = ' + caneta.nome);
console.log('Tipo da Maquina = ' + maquinaescrever.nome);
