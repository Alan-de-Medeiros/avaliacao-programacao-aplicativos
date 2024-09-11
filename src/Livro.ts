export default class Livro {
    private isbn: string;
    public titulo: string;
    public  autor: string;
    public  anoPublicacao: number;
    Livro!: string;

    constructor(isbn: string, titulo: string, autor: string, anoPublicacao: number) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }

    public exibirDetalhes(): void {
        console.log(`TITULO: ${this.titulo}`);
        console.log(`AUTOR: ${this.autor}`);
        console.log(`ISBN: ${this.isbn}`);
        console.log(`ANO DA PUBLICACAO: ${this.anoPublicacao}`);
    }

    public getSaldo(): number {
        
        return 100; 
    }
}