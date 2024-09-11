import Livro from "./Livro";

export default class Ebook extends Livro {
    private tamanho!: number;

    constructor(isbn: string, titulo: string, autor: string, anoPublicacao: number, tamanho: number) {
        super(isbn, titulo, autor, anoPublicacao);
        this.tamanho = tamanho;
    }

    public getLimite(): number {
        return this.tamanho;
    }

    public override exibirDetalhes(): void {
        super.exibirDetalhes(); 
        
        
        console.log(`TAMANHO DO ARQUIVO: ${this.tamanho}`);
    }
}
