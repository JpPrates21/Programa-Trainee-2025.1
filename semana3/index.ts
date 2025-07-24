import * as readline from 'readline';
import { ControleEstoque } from './controller/ControleEstoque';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const estoque = new ControleEstoque();

function menu() {
  console.log('\n=== MENU ESTOQUE ===');
  console.log('1. Listar produtos');
  console.log('2. Adicionar produto');
  console.log('3. Remover produto');
  console.log('4. Ver valor total');
  console.log('5. Ver peso total');
  console.log('6. Calcular média de peso');
  console.log('7. Ver quantidade total de itens');
  console.log('8. Ver quantidade total de produtos');
  console.log('0. Sair');

  rl.question('Escolha uma opção: ', (opcao: string) => {
    switch (opcao.trim()) {
      case '1':
        estoque.listar();
        menu();
        break;
      case '2':
        adicionarProduto();
        break;
      case '3':
        removerProduto();
        break;
      case '4':
        console.log('Valor total:', estoque.valorTotal());
        menu();
        break;
      case '5':
        console.log('Peso total:', estoque.pesoTotal());
        menu();
        break;
      case '6':
        console.log('Média de peso:', estoque.mediaPeso());
        menu();
        break;
      case '7':
        console.log('Quantidade total de itens:', estoque.quantidadeTotalItens());
        menu();
        break;
      case '8':
        console.log('Quantidade total de produtos:', estoque.quantidadeTotalProdutos());
        menu();
        break;
      case '0':
        console.log('Saindo...');
        rl.close();
        break;
      default:
        console.log('Opção inválida');
        menu();
        break;
    }
  });
}

function adicionarProduto() {
  rl.question('Nome: ', (nome: string) => {
    rl.question('Peso: ', (pesoStr: string ) => {
      rl.question('Valor: ', (valorStr: string) => {
        rl.question('Quantidade: ', (quantStr: string) => {
          const peso = parseFloat(pesoStr);
          const valor = parseFloat(valorStr);
          const quantidade = parseInt(quantStr);

          if (nome && !isNaN(peso) && !isNaN(valor) && !isNaN(quantidade)) {
            estoque.adicionar({ nome, peso, valor, quantidade });
            console.log('Produto adicionado com sucesso!');
          } else {
            console.log('Dados inválidos, tente novamente.');
          }
          menu();
        });
      });
    });
  });
}

function removerProduto() {
  rl.question('Nome do produto para remover: ', (nome: string) => {
    const sucesso = estoque.remover(nome);
    if (sucesso) {
      console.log('Produto removido.');
    } else {
      console.log('Produto não encontrado.');
    }
    menu();
  });
}

menu();