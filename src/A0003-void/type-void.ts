// deixando o retorno da funcao explicito, no nosso caso é void, quando a funcao não retorna nada
function semRetorno(...args: string[]): void{
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Geronimo',
  sobrenome: 'Olanda',
  exibirNome(): void{
    console.log(this.nome + ' ' + this.sobrenome + '\n');
  }
};
semRetorno('Thalia', 'Olanda');

pessoa.exibirNome();
export {pessoa};
