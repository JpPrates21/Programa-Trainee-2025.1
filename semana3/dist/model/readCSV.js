"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVModel = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const arquivoCSV = path.join(__dirname, '..', '..', 'estoque.csv');
class CSVModel {
    static lerCSV() {
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
    static salvarCSV(produtos) {
        const linhas = ['nome,peso,valor,quantidade', ...produtos.map(p => `${p.nome},${p.peso},${p.valor},${p.quantidade}`)];
        fs.writeFileSync(arquivoCSV, linhas.join('\n'));
    }
}
exports.CSVModel = CSVModel;
