// composição é quando algo compoe outro, quer dizer que algo só pode funcionar se o outro existir
// Exemplo o Ser humano e o coração, o ser humano só pode viver(existir vivo) caso tenha coração
// (Ignorar a Cremosa do coração de Pedra)

export class Carro {
  private readonly motor: Motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  Parado(): void {
    this.motor.Parado();
  }

  Acelerando(): void {
    this.motor.Acelerando();
  }

  Desligado(): void {
    this.motor.Desligado();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor esta ligado...');
  }

  Parado(): void {
    console.log('Motor esta parando...');
  }

  Acelerando(): void {
    console.log('Motor esta acelerando...');
  }

  Desligado(): void {
    console.log('Motor esta desligado...');
  }
}

const carro = new Carro();

carro.ligar();
carro.Acelerando();
carro.Parado();
carro.Desligado();
