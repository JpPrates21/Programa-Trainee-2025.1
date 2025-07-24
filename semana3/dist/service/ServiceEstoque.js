"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceEstoque = void 0;
const readCSV_1 = require("../model/readCSV");
class ServiceEstoque {
    produtos;
    constructor() {
        this.produtos = readCSV_1.CSVModel.lerCSV();
    }
    listar() {
        return this.produtos;
    }
    adicionar(produto) {
        this.produtos.push(produto);
        readCSV_1.CSVModel.salvarCSV(this.produtos);
    }
    remover(nome) {
        const index = this.produtos.findIndex(p => p.nome === nome);
        if (index !== -1) {
            this.produtos.splice(index, 1);
            readCSV_1.CSVModel.salvarCSV(this.produtos);
            return true;
        }
        return false;
    }
    valorTotal() {
        return this.produtos.reduce((soma, p) => soma + p.valor * p.quantidade, 0);
    }
    pesoTotal() {
        return this.produtos.reduce((soma, p) => soma + p.peso * p.quantidade, 0);
    }
    mediaPeso() {
        if (this.produtos.length === 0)
            return 0;
        return this.pesoTotal() / this.quantidadeTotalItens();
    }
    quantidadeTotalItens() {
        return this.produtos.reduce((soma, p) => soma + p.quantidade, 0);
    }
    quantidadeTotalProdutos() {
        return this.produtos.length;
    }
}
exports.ServiceEstoque = ServiceEstoque;
