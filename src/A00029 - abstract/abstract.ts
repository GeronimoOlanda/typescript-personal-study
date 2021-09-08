export abstract class Personagem {
  constructor(
    protected name: string,
    protected ataque: number,
    protected life: number,
  ) {}

  atacar(personagem: Personagem): void {
    console.log(`${this.name} Esta atacando...`);
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.bordao();
    this.life -= forcaAtaque;
    console.log(`${this.name} tem agora ${this.life} de vida ...`);
  }

  bordao(): void {
    console.log(`Por temasiaaaaaa!`);
  }
}

export class Guerreira extends Personagem {}
export class Monstro extends Personagem {}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 100, 2000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
