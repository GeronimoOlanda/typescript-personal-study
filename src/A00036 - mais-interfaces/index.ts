interface Pessoa {
  nome: string;
}
interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
}

interface Pessoa {
  readonly idade?: number;
}
const pessoa1: Pessoa = {
  nome: 'Geronimo',
  sobrenome: 'Olanda',
  enderecos: ['Rua mossoró'],
  idade: 23,
};

for (const p in pessoa1) {
  console.log(`${p} = ${pessoa1[p]}`);
}
