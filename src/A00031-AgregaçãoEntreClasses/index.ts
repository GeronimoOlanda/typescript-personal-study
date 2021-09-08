// agregacao é quando um objeto precisa do outro para funcionar
export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProduto(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Camiseta', 21.21);
const produto2 = new Produto('Bermuda', 32.25);
const produto3 = new Produto('Blusa Social', 56.54);
const carrinho = new CarrinhoDeCompras();
carrinho.inserirProduto(produto1, produto2, produto3);

console.log('Valor Total = ' + carrinho.valorTotal());
console.log('Quantidade de Produtos = ' + carrinho.quantidadeProdutos());
