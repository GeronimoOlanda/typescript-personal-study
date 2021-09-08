const pessoa = {
  nome: 'Geronimo' as const,
  sobrenome: 'Olanda',
};

function escolherCor(cor: 'Preto' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolherCor('Preto'));

export default 1;
