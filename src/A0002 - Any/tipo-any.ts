function showMessage(msg: string) {
  return msg;
}
const msg = showMessage('Eu te amo Jesus Cristo!');
console.log(msg);

//utilizar o any apenas em ultimo caso, pois permite aceitar todos os tipos dentro do nosso codigo.
function showMessage2(msg2: any) {
  return msg2;
}
console.log(showMessage2([1, 2, 3, 4]));
console.log(showMessage2('Salve'));
console.log(showMessage2(12));
