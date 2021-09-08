// utilizando tipagem de array em number
export function multiplicador(...args: Array<number>): number {
  return args.reduce((acumulador, valor) => acumulador * valor, 1);
}

// utilizando tipagem de array em string
export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result1 = multiplicador(1, 2, 3);
const concatena = concatenaString('Primeio valor', 'Segundo valor');
const upper = toUpperCase('geronimo', 'thalia', 'alice');

console.log(result1);
console.log(concatena);
console.log(upper);
