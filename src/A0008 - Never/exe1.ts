//tipo never especifica que a aplicação nunca será executada
// um bom uso dela pode ser para lançar erros, expecificando que uma funcao pode ser a que fará ao lançamento dos erros

export function criaErrpo(): never {
  throw new Error('Erro qualquer');
}
criaErrpo();
