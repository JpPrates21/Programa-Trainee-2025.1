import { ServiceEstoque } from '../service/ServiceEstoque';
import { Produto } from '../model/readCSV';

export class ControleEstoque {
  private service: ServiceEstoque;

  constructor() {
    this.service = new ServiceEstoque();
  }

  listar(): void {
    const lista = this.service.listar();
    console.log('\nLista de Produtos');
    if (lista.length === 0) {
      console.log('Nenhum produto cadastrado.');
    } else {
      lista.forEach((p, i) => {
        console.log(`${i + 1}. ${p.nome} - Peso: ${p.peso} - Valor: ${p.valor} - Quantidade: ${p.quantidade}`);
      });
    }
  }

  adicionar(produto: Produto): void {
    this.service.adicionar(produto);
  }

  remover(nome: string): boolean {
    return this.service.remover(nome);
  }

  valorTotal(): number {
    return this.service.valorTotal();
  }

  pesoTotal(): number {
    return this.service.pesoTotal();
  }

  mediaPeso(): number {
    return this.service.mediaPeso();
  }

  quantidadeTotalItens(): number {
    return this.service.quantidadeTotalItens();
  }

  quantidadeTotalProdutos(): number {
    return this.service.quantidadeTotalProdutos();
  }
}
