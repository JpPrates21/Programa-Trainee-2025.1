import { Produto, CSVModel } from '../model/readCSV';

export class ServiceEstoque {
  private produtos: Produto[];

  constructor() {
    this.produtos = CSVModel.lerCSV();
  }

  listar(): Produto[] {
    return this.produtos;
  }

  adicionar(produto: Produto): void {
    this.produtos.push(produto);
    CSVModel.salvarCSV(this.produtos);
  }

  remover(nome: string): boolean {
    const index = this.produtos.findIndex(p => p.nome === nome);
    if (index !== -1) {
      this.produtos.splice(index, 1);
      CSVModel.salvarCSV(this.produtos);
      return true;
    }
    return false;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, p) => soma + p.valor * p.quantidade, 0);
  }

  pesoTotal(): number {
    return this.produtos.reduce((soma, p) => soma + p.peso * p.quantidade, 0);
  }

  mediaPeso(): number {
    if (this.produtos.length === 0) return 0;
    return this.pesoTotal() / this.quantidadeTotalItens();
  }

  quantidadeTotalItens(): number {
    return this.produtos.reduce((soma, p) => soma + p.quantidade, 0);
  }

  quantidadeTotalProdutos(): number {
    return this.produtos.length;
  }
}
