"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControleEstoque = void 0;
const ServiceEstoque_1 = require("../service/ServiceEstoque");
class ControleEstoque {
    constructor() {
        this.service = new ServiceEstoque_1.ServiceEstoque();
    }
    listar() {
        const lista = this.service.listar();
        console.log('\nLista de Produtos');
        if (lista.length === 0) {
            console.log('Nenhum produto cadastrado.');
        }
        else {
            lista.forEach((p, i) => {
                console.log(`${i + 1}. ${p.nome} - Peso: ${p.peso} - Valor: ${p.valor} - Quantidade: ${p.quantidade}`);
            });
        }
    }
    adicionar(produto) {
        this.service.adicionar(produto);
    }
    remover(nome) {
        return this.service.remover(nome);
    }
    valorTotal() {
        return this.service.valorTotal();
    }
    pesoTotal() {
        return this.service.pesoTotal();
    }
    mediaPeso() {
        return this.service.mediaPeso();
    }
    quantidadeTotalItens() {
        return this.service.quantidadeTotalItens();
    }
    quantidadeTotalProdutos() {
        return this.service.quantidadeTotalProdutos();
    }
}
exports.ControleEstoque = ControleEstoque;
