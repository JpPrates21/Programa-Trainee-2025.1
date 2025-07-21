import * as fs from 'fs';
import * as path from 'path';

const arquivoCSV = path.join(__dirname, '..', '..', 'estoque.csv');


export interface Produto {
  nome: string;
  peso: number;
  valor: number;
  quantidade: number;
}

export class CSVModel {
  static lerCSV(): Produto[] {
    if (!fs.existsSync(arquivoCSV)) {
      fs.writeFileSync(arquivoCSV, 'nome,peso,valor,quantidade\n');
    }

    const data = fs.readFileSync(arquivoCSV, 'utf-8').trim();
    const linhas = data.split('\n').slice(1);

    return linhas
      .filter(linha => linha.trim() !== '')
      .map(linha => {
        const [nome, peso, valor, quantidade] = linha.split(',');
        return {
          nome,
          peso: parseFloat(peso),
          valor: parseFloat(valor),
          quantidade: parseInt(quantidade)
        };
      });
  }

  static salvarCSV(produtos: Produto[]): void {
    const linhas = ['nome,peso,valor,quantidade', ...produtos.map(p =>
      `${p.nome},${p.peso},${p.valor},${p.quantidade}`
    )];
    fs.writeFileSync(arquivoCSV, linhas.join('\n'));
  }
}
