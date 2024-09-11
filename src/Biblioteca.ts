import Livro from './Livro'; 
import leia from 'readline-sync';

export default class Biblioteca {
    private livros: Livro[];

    constructor() {
        this.livros = [];
    }

    public addLivro(): void {
        console.log("----------ADICIONANDO LIVRO----------");
        const nomeLivro = leia.question("INFORME O NOME DO SEU LIVRO: ");
        const autorLivro = leia.question("INFORME O AUTOR DO LIVRO: ");
        const ISBNlivro = leia.question("INFORME O ISBN DO LIVRO: ");
        const anoPublicacao = parseInt(leia.question("INFORME O ANO DE PUBLICACAO: "), 10);

        const novoLivro = new Livro(ISBNlivro, nomeLivro, autorLivro, anoPublicacao);
        this.livros.push(novoLivro);
        console.log(`O LIVRO "${nomeLivro}" FOI ADICIONADO COM SUCESSO`);
    }

    public removerLivro(): void {
        console.log("---------REMOVENDO LIVRO-----------");
        const nomeLivro = leia.question("INFORME O NOME DO LIVRO PARA REMOVER: ");
        let livroRemovido = false;

        for (let i = 0; i < this.livros.length; i++) {
            if (this.livros[i].titulo === nomeLivro) {
                livroRemovido = true;
                console.log(`O LIVRO "${nomeLivro}" FOI REMOVIDO COM SUCESSO`);
                break;
            }
        }

        if (!livroRemovido) {
            console.log(`O LIVRO "${nomeLivro}" NÃO FOI ENCONTRADO`);
        }
    }

    public buscarLivro(): void {
        console.log("----------BUSCANDO LIVRO----------");
        const ISBNlivro = leia.question("INFORME O ISBN DO LIVRO PARA BUSCAR: ");
        let livroEncontrado = false;

        for (let i = 0; i < this.livros.length; i++) {
            if (this.livros[i].Livro === ISBNlivro) {
                console.log("----------DETALHES DO LIVRO----------");
                this.livros[i].exibirDetalhes();
                livroEncontrado = true;
                break;
            }
        }

        if (!livroEncontrado) {
            console.log(`O LIVRO COM ISBN "${ISBNlivro}" NÃO FOI ENCONTRADO`);
        }
    }

    public mostrarDetalhes(): void {
        console.log("----------LISTA DE LIVROS----------");
        if (this.livros.length === 0) {
            console.log("NENHUM LIVRO CADASTRADO");
        } else {
            for (let i = 0; i < this.livros.length; i++) {
                this.livros[i].exibirDetalhes();
            }
        }
    }
}
