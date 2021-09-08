// acessando dados não ordenados com o enum, similar ao c#(provavelmente a mesma coisa, pois ts foi desenvolvido pela microsoft, criadora do c#)
enum Cores {
  Red,
  Blue = 200,
  Yellow,
  Gray = 100,
}

enum Familia {
  Mae = 'Marines',
  Pai = 'José Geronimo',
  Irmao = 'Carlos e Brivaldo',
  Irma = 'Carla',
}

enum Filhos {
  filho1 = 'Alice',
  flho2 = 'Gaspar',
  filho3 = 'Milena',
  filho4 = 'Emmanuel',
  outros = 'Deus providenciará um nome para voces caso ocorram',
}

enum PaisDosFilhos {
  Pai = 'Geronimo',
  Mae = 'Thalia',
}
console.log(Cores.Red);
console.log(Cores.Blue);
console.log(Cores.Yellow);
console.log(Cores.Gray);
console.log('\n');

console.log(Cores);
console.log('\n');
console.log(Familia);
console.log('\n');
console.log(Filhos);
console.log('\n');
console.log(PaisDosFilhos);

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}
